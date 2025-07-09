'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Mail, Phone, Download, Play } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import CaseInsightsProjects from '@/components/projects';
import VisualResume from '@/components/visual_resume';
import Footer from '@/components/footer';
import { axiosInstanceMultipart } from '../../../../shared/axiousintance';

const Profile_details = () => {
  const { user_id } = useParams();
  const [user, setUser] = useState(null);

  const sections = [
    "Core Skills & Technical Proficiencies",
    "Professional Journey & Internship Roles",
    "Case Insights & Key Projects",
    "Learning & Academic Milestones",
    "Endorsements from Mentors & Peers"
  ];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosInstanceMultipart.get(`/user/${user_id}`);
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    if (user_id) fetchUser();
  }, [user_id]);

  if (!user) return <div className="text-center mt-20">Loading...</div>;

  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-6 h-50 mt-2.5 relative">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 mt-30 text-white">
            <div className="flex items-center space-x-2">
              <Mail size={18} />
              <span className="text-sm">{user.email || 'Email not available'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={18} />
              <span className="text-sm">{user.phone || 'Phone not available'}</span>
            </div>
          </div>

          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[200px] h-[200px]">
              <Image
                src={user.profileImage ? `http://localhost:5000/public${user.profileImage}` : '/placeholder.jpg'}
                alt="Profile Image"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-full relative z-10"
              />
            </div>
          </div>

          <button className="bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-xl flex items-center space-x-2 transition-all duration-200 mt-30 border border-white relative group">
            <Download size={16} />
            <span className="text-sm font-medium relative">Download My Resume</span>
          </button>
        </div>
      </div>

      <div className="text-center mt-28 px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{user.fullName}</h1>
        <p className="text-gray-600 text-lg">{user.heOrShe} | {user.age} | {user.pronouns}</p>
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl">
          <Play size={18} />
          <span className="font-medium">Watch my Visual Resume Now</span>
        </button>
      </div>

      <div className="mt-16 px-8 pb-12">
 
        <div className="max-w-6xl mx-auto">
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
  {user.skills && user.skills.length > 0 ? (
    user.skills.map((skill, index) => (
      <div
        key={index}
        className="bg-gray-100 text-center p-2 rounded-lg shadow hover:shadow-md transition duration-300"
      >
        {skill}
      </div>
    ))
  ) : (
    <p className="col-span-full text-center text-gray-500">No skills added yet.</p>
  )}
</div>

        </div>
      </div>

 <div className="bg-white py-12 px-4 md:px-20  ">
  <div className="max-w-4xl mx-auto text-center">
    {user.about
      ? user.about
          .split(' ')
          .reduce((acc, word, index) => {
            const chunkSize = 50; 
            const chunkIndex = Math.floor(index / chunkSize);

            if (!acc[chunkIndex]) acc[chunkIndex] = [];
            acc[chunkIndex].push(word);
            return acc;
          }, [])
          .map((chunk, index) => (
    
            <p key={index} className="text-gray-500 text-base md:text-lg leading-relaxed mb-4">
  {chunk.join(' ')}
</p>

          ))
      : <p class="text-gray-500 text-sm"> <strong>Skills:</strong> React, Node.js, MongoDB, Express </p>
    }
  </div>
</div>


      <CaseInsightsProjects user={user} />

      <VisualResume user={user} />
      <Footer />
    </>
  );
};

export default Profile_details;
