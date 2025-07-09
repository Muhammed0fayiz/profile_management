import React from 'react';
import { Download, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center px-4 py-12 mt-15">
 
      <div className="bg-gradient-to-r from-orange-400 to-red-500 w-full max-w-6xl rounded-[40px] text-white p-10 text-center shadow-xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Connect with Saksham Arora</h1>

        <a
          href="/resume.pdf" 
          download
          className="inline-flex items-center bg-white text-orange-600 font-medium px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <Download className="w-5 h-5 mr-2" />
          Download My Resume
        </a>
      </div>


      <div className="mt-10 flex flex-wrap justify-center items-center space-x-6 text-gray-700 text-sm">
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4" />
          <span>Email</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4" />
          <span>Phone</span>
        </div>
      </div>


      <div className="mt-4 flex space-x-4">
        <a
          href="https://github.com/your-profile"
          target="_blank"
          className="border border-gray-300 px-4 py-1.5 rounded-full text-sm hover:bg-gray-100 transition"
        >
          <Github className="inline-block w-4 h-4 mr-1" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          className="border border-gray-300 px-4 py-1.5 rounded-full text-sm hover:bg-gray-100 transition"
        >
         
           <FaLinkedin className="inline-block w-4 h-4 mr-1" />
          LinkedIn
        </a>
      </div>

      {/* Footer Note */}
      <div className="text-xs text-gray-500 mt-8 border-t pt-4 w-full max-w-6xl text-center">
        © 2024 MAHE BLR U
      </div>
    </div>
  );
}
