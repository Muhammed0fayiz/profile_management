import Navbar from '@/components/navbar'
import React from 'react'
import { Mail, Phone, Download, Play } from 'lucide-react';
import { firstLogo } from '@/datas/navbar';
import Image from 'next/image';
import CaseInsightsProjects from '@/components/projects';
import VisualResume from '@/components/visual_resume';
import Footer from '@/components/footer';

const Profile_details = () => {
    const sections = [
    "Core Skills & Technical Proficiencies",
    "Professional Journey & Internship Roles", 
    "Case Insights & Key Projects",
    "Learning & Academic Milestones",
    "Endorsements from Mentors & Peers"
  ];
  return (
 <>
 <Navbar/>
  <div className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-6 h-50 mt-2.5 relative">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    
    {/* Left section */}
    <div className="flex items-center space-x-6 mt-30">
      <div className="flex items-center space-x-2 text-white">
        <Mail size={18} />
        <span className="text-sm">Email</span>
      </div>
      <div className="flex items-center space-x-2 text-white">
        <Phone size={18} />
        <span className="text-sm">Phone</span>
      </div>
    </div>

  
<div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <div className="relative w-[200px] h-[200px]">





    <Image
      src={firstLogo.img}
      alt="Manipal Logo"
      width={200}
      height={200}
      className="w-full h-full object-cover rounded-full relative z-10"
    />
  </div>
</div>




    <button className="bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-xl flex items-center space-x-2 transition-all duration-200 mt-30 border border-white relative group">
      <Download size={16} />
      <span className="text-sm font-medium relative">
        Download My Resume

        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-3 border-b-2 border-white rounded-full transition-all duration-300 group-hover:w-full"></span>
      </span>
    </button>
  </div>
</div>











   {/* Name and Info */}
        <div className="text-center mt-26 px-8 ">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Saksham Arora</h1>
          <p className="text-gray-600 text-lg">Male | 25 | He/Him</p>
        </div>



  {/* Visual Resume Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl">
            <Play size={18} />
            <span className="font-medium">Watch my Visual Resume Now</span>
          </button>
        </div>


   <div className="mt-16 px-8 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg text-center cursor-pointer transition-all duration-200 hover:shadow-md border border-gray-200"
                >
                  <h3 className="text-sm font-medium text-gray-800 leading-tight">
                    {section}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>


{/* Skills */}

      {/* <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Technical Skills</h4>
              <p className="text-gray-600 text-sm">Frontend & Backend Development, Database Management, Cloud Technologies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Experience</h4>
              <p className="text-gray-600 text-sm">Software Development Intern, Full Stack Developer, Project Lead</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Education</h4>
              <p className="text-gray-600 text-sm">Computer Science Graduate, Certified Professional, Continuous Learner</p>
            </div>
          </div>
        </div>
      </div> */}




      {/* About Section (Paragraph from screenshot) */}
<div className="bg-white py-12 px-4 md:px-20">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
      I am Saksham Arora, a 25-year-old MBA candidate at TAPMI, Bengaluru (2024–2026), with a BTech in Electronics & Communication (CGPA 7.95). I bring 35 months of experience, including boosting system scalability by 30% and earning the Rise Insta Award at Infosys for enhancing backend efficiency by 25%.
    </p>
    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
      I have developed Python-based analytics tools during internships and drove a 20% rise in donations through strategic social media campaigns. Certified in SQL, Python, Java, and IoT, I have also delivered impactful projects like a ReactJS prototype for accessibility and a QR-based attendance system. My achievements in national contests showcase both my technical expertise and creative problem-solving.
    </p>
  </div>
</div>


{/* lanuage */}
<div>htlm</div>








<CaseInsightsProjects/>


<VisualResume/>
<Footer/>
    </>
  )
}

export default Profile_details