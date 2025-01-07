'use server'

import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'
import puppeteer from 'puppeteer'

const MAX_CONTENT_LENGTH = 8000

async function captureScreenshot(url: string): Promise<string | null> {
  let browser = null;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(url, { waitUntil: 'networkidle0' });
    const screenshot = await page.screenshot({ encoding: 'base64', fullPage: false });
    return `data:image/png;base64,${screenshot}`;
  } catch (error) {
    console.error('Error capturing screenshot:', error);
    return null;
  } finally {
    if (browser) await browser.close();
  }
}

export async function analyzeLandingPage(inputType: 'url' | 'content', input: string) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not set in the environment variables');
  }

  let content = input;
  let screenshot = null;

  if (inputType === 'url') {
    try {
      const [response, screenshotData] = await Promise.all([
        fetch(input, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
          }
        }),
        captureScreenshot(input)
      ]);
      content = await response.text();
      screenshot = screenshotData;
    } catch (error) {
      console.error('Error fetching URL content:', error);
      throw new Error('Failed to fetch content from the provided URL');
    }
  }

  if (content.length > MAX_CONTENT_LENGTH) {
    content = content.substring(0, MAX_CONTENT_LENGTH) + '...(truncated)';
  }

  const prompt = `
    Analyze the following landing page content and provide a detailed analysis with scores (0-100) for these categories:
    1. Messaging
    2. Readability
    3. Structure
    4. Actionability
    5. Design
    6. Credibility

    For each category:
    - Provide a score out of 100
    - Write a brief but insightful analysis paragraph
    - Give 2 specific, actionable recommendations for improvement

    Content:
    ${content}

    Respond in the following JSON format:
    {
      "results": [
        {
          "category": "Category Name",
          "score": 0,
          "feedback": "Detailed analysis paragraph",
          "recommendations": ["Specific recommendation 1", "Specific recommendation 2"]
        }
      ]
    }

    Make the analysis critical but constructive, focusing on specific improvements that could be made.
  `;

  try {
    const response = await generateText({
      model: openai('gpt-4o'),
      prompt: prompt,
    });

    const jsonContent = response.text.replace(/\`\`\`json\n|\n\`\`\`/g, '').trim();
    let results;
    try {
      results = JSON.parse(jsonContent).results;
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      throw new Error('Failed to parse the analysis results');
    }

    if (!Array.isArray(results)) {
      throw new Error('Invalid results structure');
    }

    const overallScore = Math.round(
      results.reduce((acc, curr) => acc + curr.score, 0) / results.length
    );

    return {
      results,
      metadata: {
        url: inputType === 'url' ? input : null,
        screenshot,
        score: overallScore,
        date: new Date().toISOString()
      }
    };

  } catch (error) {
    console.error('Error analyzing landing page:', error);
    if (error instanceof Error) {
      throw new Error(`Analysis failed: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred during analysis');
    }
  }
}

