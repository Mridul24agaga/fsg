'use client'

import Image from 'next/image'
import { websiteList } from './website-list'
import { useState } from 'react'
import { FiClock, FiTrendingUp, FiAlertCircle, FiCheckCircle, FiExternalLink, FiLink, FiTool, FiEdit } from 'react-icons/fi'
import Footer from '../components/footer'

export default function ReportPage() {
  const [visibleWebsites, setVisibleWebsites] = useState(50)

  const loadMore = () => {
    setVisibleWebsites(prev => Math.min(prev + 50, websiteList.length))
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-white border-b-2 border-orange-500 py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Image src="/getmorepacklinks.png" alt="Company Logo" width={70} height={50} />
          <h1 className="text-3xl font-bold">
            <span className="text-orange-500 mt-15">Submission</span> Report
          </h1>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        {/* Report Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <section className="bg-gray-50/80 border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-orange-500">Report</span> Overview
            </h2>
            <p className="mb-4">This report provides a comprehensive overview of your startup's submission status across various platforms. It includes submission guidelines, a list of submitted websites, and evidence of submissions.</p>
            <p>Use this report to track your progress and ensure maximum visibility for your startup.</p>
          </section>

          <section className="bg-gray-50/80 border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-orange-500">Submission</span> Guidelines
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <FiClock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Processing Time</h3>
                  <p>Expect results to appear within 30-60 days after submission. Be patient and use this time to refine your product.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <FiTrendingUp className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Maximize Visibility</h3>
                  <p>Regularly update your product information and engage with the community to increase your chances of being featured.</p>
                </div>
              </li>
            </ul>
          </section>
        </div>

        {/* Submitted Websites Section */}
        <section className="bg-gray-50/80 border border-gray-200 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-orange-500">Submitted</span> Websites
          </h2>
          <p className="mb-6">Your startup has been submitted to 200+ websites. This extensive list covers a wide range of platforms, increasing your chances of visibility and success.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="col-span-full bg-gray-50/80 border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">Referral rocket</h3>
                </div>
                <a 
                  href="https://referralrocket.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  <FiExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-xs bg-gradient-to-r from-gray-600 to-orange-500 text-white px-2 py-1 rounded">Submitted</span>
              </div>
            </div>
            
            <div className="col-span-full bg-gray-50/80 border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-4">Priority SEO Actions</h3>
              <p className="mb-4">Improvement suggestions for sections with a score below 100%</p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold">Indexation & Robots.txt</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">Consider adding hreflang tags if your content is available in multiple languages.</p>
                </div>

                <div>
                  <h4 className="font-bold">Content Structure & Accessibility</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">Improve your heading structure: Document doesn't start with an H1. Heading level skipped. "Referral Rocket" should be H1 instead of H5. Heading level skipped. "Boost your sales" should be H3 instead of H5. Heading level skipped. "Refer-a-Friend program reward customers for bringing in new referrals, encouraging word-of-mouth marketing." should be H4 instead of H5. Heading level skipped. "Affiliates earn a commission for each sale they help make by promoting company's product or services." should be H4 instead of H5. Heading level skipped. "A double sided referral program for your ecommerce shop, to reward customers for referring new customers." should be H4 instead of H5. Heading level skipped. "Referral program that rewards users as they reach specific milestones by referring more and more friends." should be H4 instead of H5. Heading level skipped. "Rewards your newsletter subscribers when they refer a friend to subscribe your newsletter." should be H4 instead of H5. Heading level skipped. "Run a SaaS referral program to allow customers to refer their friends to earn a reward." should be H4 instead of H5. Heading level skipped. "Launch a customized program that perfectly reflects your brand. Start driving sales through passionate brand advocates in minutes—minimum coding or technical expertise required. Our intuitive platform handles everything, so you can focus on growing your business." should be H3 instead of H5. Heading level skipped. "Unlock comprehensive insights into your campaign's performance with our dashboards, tracking everything from conversion rates to referral chain depth and reward ROI—all in real-time visualizations that help you optimize your program's success." should be H3 instead of H5. Heading level skipped. "Connect with our powerful REST APIs to fully customize your widget or build the seamless, scalable experience that your business demands and your customers expect." should be H3 instead of H5. Heading level skipped. "Easily track and manage rewards with flexible reward rules you control. Set custom reward tiers, payout thresholds, then pay recipients instantly through Stripe, Tremendous gift cards, or streamline mass payouts via PayPal and Wise—all from one unified dashboard." should be H3 instead of H5. Heading level skipped. "How to Start a Referral Program That Lands You the Best Customers and Accelerates Your Success?" should be H3 instead of H6. Heading level skipped. "Referral Rocket" should be H2 instead of H5. Multiple H1 headings found</p>
                </div>

                <div>
                  <h4 className="font-bold">Structured Data</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">Consider adding structured data to enhance how your content appears in search results.</p>
                </div>

                <div>
                  <h4 className="font-bold">Meta & SEO Tags</h4>
                  <p className="text-sm text-gray-600">Score: 78/100</p>
                  <p className="text-sm">Title is too short. Aim for 50-60 characters.</p>
                </div>

                <div>
                  <h4 className="font-bold">Links & Navigation</h4>
                  <p className="text-sm text-gray-600">Score: 98/100</p>
                  <p className="text-sm">Fix the broken links to ensure a smooth user experience and proper page indexing.</p>
                </div>
              </div>
            </div>
            <div className="col-span-full mt-6 bg-gray-50/80 border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-xl mb-4">SEO Improvement Suggestions</h4>
              <p className="mb-4">Based on the analysis, here are the key areas to focus on and how to improve them:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Multilingual SEO:</strong> If your content is available in multiple languages, implement hreflang tags. This helps search engines serve the correct language version to users.</li>
                <li><strong>Image Optimization:</strong> Add descriptive alt tags to all images. This improves accessibility for screen readers and helps search engines understand the content of your images.</li>
                <li><strong>Heading Structure:</strong> Revise your heading hierarchy to ensure it's logical and sequential. Use H1 for main titles, H2 for section headings, and H3 for subsections. Avoid skipping levels.</li>
                <li><strong>Structured Data:</strong> Implement relevant schema markup (e.g., Organization, Product, FAQ) to enhance your search result appearance and potentially improve click-through rates.</li>
                <li><strong>Meta Tags:</strong> Expand your title tag to 50-60 characters. Include your main keyword and make it compelling to improve click-through rates from search results.</li>
              </ul>
              <p className="mt-4">By addressing these areas, you can significantly improve your website's SEO performance, user experience, and visibility in search results.</p>
            </div>

            <div className="col-span-full mt-6 bg-orange-100 border-2 border-orange-500 rounded-lg p-6">
              <h4 className="font-bold text-2xl text-orange-600 mb-4">Boost Your SEO with Our Blog Service</h4>
              <p className="text-lg mb-4">Blogs are crucial for SEO success. They help you:</p>
              <ul className="list-disc list-inside text-lg space-y-2 mb-6">
                <li>Increase organic traffic</li>
                <li>Improve search engine rankings</li>
                <li>Establish your brand as an industry authority</li>
                <li>Create opportunities for backlinks</li>
                <li>Engage your audience and increase time on site</li>
              </ul>
              <p className="text-xl font-bold mb-4">We offer a premium blog service to supercharge your SEO efforts:</p>
              <ul className="list-none text-lg space-y-3 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2 text-2xl">✅</span> SEO-optimized blog posts tailored to your needs</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-2xl">✅</span> Customized content strategy aligned with your business goals</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-2xl">✅</span> Expert writers with industry knowledge</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-2xl">✅</span> Plans starting from just $14/month</li>
              </ul>
              <p className="text-xl font-bold">
                Ready to elevate your SEO game? 
                <a className='text-orange-600 hover:underline ml-2' href="https://twitter.com/KrissmannGupta" target="_blank" rel="noopener noreferrer">
                  DM us on Twitter to get started!
                </a>
              </p>
            </div>

            {/* Website list with load more */}
            <div className="col-span-full">
              <div className="h-[400px] overflow-y-auto bg-gray-50/80 border border-gray-200 rounded-md p-4 mb-4">
                <ul className="space-y-2">
                  {websiteList.slice(0, visibleWebsites).map((website, index) => (
                    <li key={index}>
                      <a 
                        href={website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-black"
                      >
                        {website}
                      </a>
                    </li>
                  ))}
                </ul>
                {visibleWebsites < websiteList.length && (
                  <button 
                    onClick={loadMore} 
                    className="mt-4 bg-gradient-to-r from-gray-600 to-orange-500 text-white px-4 py-2 rounded font-bold"
                  >
                    Load More
                  </button>
                )}
              </div>
              <div className="bg-orange-100 border-2 border-orange-500 rounded-lg p-6 text-center">
                <p className="text-2xl font-bold mb-4">⭐ IMPORTANT NOTE ⭐</p>
                <p className="text-xl font-bold">
                  If your startup has not been listed yet, don't worry! It takes 30-60 days for the results to appear.
                </p>
                <p className="text-lg mt-4">
                  After 30 days, if you face any issues, message us on <a className='text-orange-600' href="https://x.com/KrissmannGupta">Twitter</a>. We will help you out as much as we can!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50/80 border border-gray-200 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-orange-500">Paid</span> Directories
          </h2>
          <p className="mb-6">To further boost your visibility, consider listing your product on these premium directories:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Opentools</h3>
              <p className="text-sm text-gray-600 mb-2">Launch your product to a community of early adopters and tech enthusiasts.</p>
              <a 
                href="https://www.producthunt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
              </a>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Killer Startups</h3>
              <p className="text-sm text-gray-600 mb-2">Reach entrepreneurs and small business owners with lifetime deals.</p>
              <a 
                href="https://appsumo.com/partners/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
              </a>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Futurepedia</h3>
              <p className="text-sm text-gray-600 mb-2">Get listed on the world's largest tech marketplace for business software.</p>
              <a 
                href="https://www.g2.com/products/new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="bg-orange-100 border-2 border-orange-500 rounded-lg p-6 text-center">
            <p className="text-2xl font-bold mb-4">🚀 Coming Soon: Directory Partnerships</p>
            <p className="text-lg">
              We're excited to announce that we'll soon be partnering with top directories to offer you exclusive listing opportunities!
            </p>
            <button className="mt-4 bg-gradient-to-r from-gray-600 to-orange-500 text-white px-6 py-2 rounded-lg font-bold">
              Get Notified
            </button>
          </div>
        </section>

        <section className="bg-gray-50/80 border border-gray-200 rounded-lg p-6 mb-12">
                  <h2 className="text-2xl font-bold mb-4">
                    <span className="text-orange-500">Submission</span> Evidence
                  </h2>
                  <p className="mb-6">Below are the confirmation emails and submission receipts from various platforms:</p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Startupanz.com Card */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="relative h-[400px]">
                        <Image 
                          src="/referral1.png" 
                          alt="Startupanz.com confirmation"
                          fill
                          className="object-contain"
                        />
                      </div>
                      
                    </div>
        
                    {/* Additional Evidence Cards */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="relative h-[400px]">
                        <Image 
                          src="/referral2.png" 
                          alt="ProductHunt submission"
                          fill
                          className="object-contain"
                        />
                      </div>
                     
                    </div>
        
                    
                   
        
                   
        
                    
                  </div>
                </section>
        
      </main>

      <Footer/>
    </div>
  )
}
