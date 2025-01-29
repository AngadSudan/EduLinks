import React from "react"
import img1 from "../../../../assets/Group-12.png"
import img2 from "../../../../assets/icon-3.png"
import img3 from "../../../../assets/image-26.png"
import img4 from "../../../../assets/image-27.png"
import img5 from "../../../../assets/image-28.png"




const courses = [
    {
      title: "Financial Analyst",
      image: "https://edulinks.io/wp-content/uploads/2024/10/image-26.png",
      description:
        "Financial Analysts in Australia assess market trends, evaluate investment opportunities, and provide financial advice to businesses and individuals. These professionals work in industries like banking, insurance, and investment, helping clients make informed financial decisions.",
    },
    {
      title: "Economic Data Analyst",
      image: "https://edulinks.io/wp-content/uploads/2024/10/image-27.png",
      description:
        "Economic Data Analysts in Australia interpret economic data, analyze trends, and provide insights to government agencies, corporations, and financial institutions. They help shape economic policies and business strategies, contributing to Australia’s economic stability and growth.",
    },
    {
      title: "Supply Chain Manager",
      image: "https://edulinks.io/wp-content/uploads/2024/10/image-28.png",
      description:
        "Supply Chain Managers in Australia manage the logistics of goods and services, ensuring efficient and sustainable supply chains. These professionals are vital in industries like retail, manufacturing, and logistics, where they optimize operations and manage costs.",
    },
  ]

const universities = [
    {
      name: "University of Melbourne",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pnbutq0gI9kfXYkMYyMs6K6mHB5Nqi.png",
    },
    {
      name: "University of Sydney",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s2KXZvugIpnykOll0tAEC9ai9xWQvN.png",
    },
    {
      name: "Australian National University (ANU)",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2t56bnXZe7e4dCYif2eXDCDQwppgZ3.png",
    },
    {
      name: "University of Queensland",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7cqEt7DDDpf8lh9wq4c6lbbw0yQUGk.png",
    },
    {
        name: "Monash University",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10004-F7e3RjikABne3vyqHrz34SaVdQQFSB.png",
    },
  ]

const faqs = [
  {
    question: "What is Business & Economics?",
    answer:
      "It’s the study of financial systems, markets, and economic policies, focusing on business operations and resource management.",
  },
  {
    question: "What degrees do I need to work in Business & Economics in Australia?",
    answer:
      "A bachelor’s degree in business, economics, finance, or a related field is required, with advanced degrees useful for specialized roles.",
  },
  {
    question: "What skills are essential for business and economics professionals in Australia?",
    answer:
      "Analytical thinking, problem-solving, and proficiency in financial modeling are key skills for success.",
  },
  {
    question: "Are there internships available for business and economics students in Australia?",
    answer:
      "Many companies offer internships that provide experience in financial analysis, supply chain management, and economic data analysis.",
  },
  {
    question: "What are the emerging trends in Australia’s business and economics sector?",
    answer:
      "AI in finance, digital transformation in supply chains, and sustainability in business practices are key trends.",
  },
  {
    question: "Can Australian business and economics professionals work internationally?",
    answer:
      "Yes, Australian qualifications are highly respected globally, providing opportunities for international careers.",
  },
  {
    question: "What is the job outlook for business and economics professionals in Australia?",
    answer:
      "The outlook is positive, with growing demand for professionals in financial analysis, economic data analysis, and supply chain management.",
  },
  {
    question: "How does specialization affect my career in Australian business and economics?",
    answer:
      "Specializing in areas like supply chain management or data analysis can open up more career opportunities and lead to higher salaries.",
  },
  {
    question: "Are business and economics jobs flexible in Australia?",
    answer:
      "Many roles offer flexibility, including options for remote work and project-based employment.",
  },
  {
    question: "What are the challenges faced by business and economics professionals in Australia today?",
    answer:
      "Challenges include navigating global trade complexities, managing economic volatility, and staying ahead of technological changes.",
  },

  
]

export default function BioTech() {
  const [openFaqIndex, setOpenFaqIndex] = React.useState(null)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-[#37d7d9]">edulinks</span>
              </a>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  About
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Study Destinations
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Services
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-[#37d7d9] text-white px-4 py-2 rounded-md text-sm font-medium">
                Free Career Counseling
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative  py-16 sm:py-24"
      style={

        {
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      }
      
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-522-T0amr9ccbOpFeiSQ8GjqvpRryLouhA.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1" >Australia</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Business & Economics</h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-[30px] md:mt-5 md:max-w-3xl">
            Gateway to Innovative Careers in Australia
          </p>
        </div>
      </div>
    <div>
        <div className="absolute  left-[6%] top-[62%]">
          <img  src={img2}
          
          /> 
          
          
                 </div>
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-center text-black font-roboto1 text-2xl font-light leading-[37.2px]">
              
            
            Australia’s diverse economy, strong trade networks, and commitment to innovation make it a prime location for careers in Business & Economics. Professionals in fields such as financial analysis, economic data analysis, and supply chain management are essential to driving the country’s economic growth and supporting its global trade. With its focus on sustainability, technology, and global markets, Australia offers rich opportunities for business and economics professionals.
            </h1>
          </div>


      </div>

      {/* Courses Section */}
      <div className="py-16 bg-[#37D7D91A]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="space-y-12">
      {courses.map((course, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } gap-8`}
        >
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="rounded-lg shadow-lg w-[401px] h-[292px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-4">
              {course.title}
            </h2>
            <p className="text-[#232323] font-roboto1 text-[24px] font-light leading-[37.2px]">
              {course.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
<div className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
    {/* Section 1 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Why Choose a Career in Business & Economics?
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      A career in Business & Economics in Australia offers the opportunity to work in one of the world’s fastest-growing economies. Whether managing supply chains, analyzing markets, or interpreting economic data, professionals in these fields play a crucial role in driving business success and economic growth.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Business & Economics Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job outlook for Business & Economics professionals in Australia is strong, particularly in financial analysis, economic data analysis, and supply chain management. As the economy continues to grow and expand, demand for skilled professionals in these areas is expected to rise.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Business & Economics
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The future of Business & Economics in Australia is focused on sustainability, global trade, and digital transformation. Financial analysts will use new technologies to assess markets, economic data analysts will drive data-driven policymaking, and supply chain managers will innovate in logistics
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Business & Economics Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Top employers in Australia’s Business & Economics sector include Commonwealth Bank, Westpac, Deloitte, and Woolworths. Additionally, government agencies such as the Australian Treasury offer extensive opportunities for economic data analysts.
      </p>
    </div>
  </div>
</div>


      {/* Universities Section */}
      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
            Top Picks for Future Engineers:<br />
            Australia's Elite Tech Universities
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-wrap justify-center gap-8 w-full mb-8">
              {universities.slice(0, 3).map((university, index) => (
                <div key={index} className="w-full sm:w-[369.537px] bg-white shadow-lg overflow-hidden border-b-4 border-[#37D7D9]">
                  <div className="h-[365px] overflow-hidden">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between" style={{ height: '152px' }}>
                    <h3 className="text-[24px] font-normal font-roboto text-center">
                      {university.name}
                    </h3>
                    <div className="text-center">
                    <button className="px-6 py-2 text-[16px] font-roboto font-bold bg-white text-[#53C2C3] hover:bg-[#53C2C3] hover:text-white transition-colors border border-[#53C2C3]">
                        Explore &gt;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-8 w-full">
              {universities.slice(3).map((university, index) => (
                <div key={index} className="w-full sm:w-[369.537px] bg-white shadow-lg overflow-hidden border-b-4 border-[#37D7D9]">
                  <div className="h-[365px] overflow-hidden">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between" style={{ height: '152px' }}>
                    <h3 className="text-[24px] font-normal font-roboto text-center">
                      {university.name}
                    </h3>
                    <div className="text-center">
                    <button className="px-6 py-2 text-[16px] font-roboto font-bold bg-white text-[#53C2C3] hover:bg-[#53C2C3] hover:text-white transition-colors border border-[#53C2C3]">
                        Explore &gt;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-[32px] font-regular text-[#232323] mb-6">
          Average Salary in Business & Economics
          </h1>
          <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
          Business & Economics professionals in Australia earn competitive salaries. Financial analysts typically earn around AUD $85,000 annually, while economic data analysts make approximately AUD $80,000. Supply chain managers can expect to earn about AUD $95,000, depending on experience and expertise.
          </p>
        </div>
      </div>

      {/* FAQs Section */}
  <div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-regular text-center mb-8">Top 10 FAQs for Engineering & Technology</h2>
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-[#37d7d9] shadow-sm">
          <button
            className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
          >
            <span className="font-black text-[20px] font-roboto text-white">{faq.question}</span>
            <span className="ml-6 flex-shrink-0">{openFaqIndex === index ? "−" : "+"}</span>
          </button>
          {openFaqIndex === index && (
            <div className="px-6 bg-[#ebfbfc]  ">
              <p className="text-black text-[20px] font-roboto1 font-regular">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Footer */}
      
    </div>
  )
}

