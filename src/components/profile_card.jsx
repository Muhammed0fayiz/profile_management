'use client'
import React, { useEffect, useState } from 'react';
import { axiosInstanceMultipart } from '../../shared/axiousintance';
import Link from 'next/link';
import Image from 'next/image'; // ✅ Import Image

export default function ProfileCard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstanceMultipart.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {users.map((user) => (
            <div key={user._id} className="w-full max-w-sm mx-auto">
              <Link href={`/${user._id}`}>
                <div className="relative h-80 sm:h-96 lg:h-80 rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-xl transition duration-300">
                  {/* Top half background */}
                  <div className="h-1/2 bg-orange-400 w-full"></div>

                  {/* Bottom half content */}
                  <div className="h-1/2 bg-gray-100 w-full absolute bottom-0 left-0 px-4 sm:px-6">
                    <div className="flex justify-center">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-white overflow-hidden shadow-md -mt-14 sm:-mt-16 lg:-mt-20 bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center">
                   <Image
  src={user.image ? user.image : '/placeholder.jpg'}
  alt="Profile Image"
  width={128}
  height={128}
  className="w-full h-full object-cover rounded-full relative z-10"
/>

                      </div>
                    </div>

                    <div className="text-center mt-4 sm:mt-5 pb-4">
                      <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                        {user.fullName}
                      </h2>
                      <p className="text-gray-600 text-lg">
                        {user.heOrShe} | {user.age} | {user.pronouns}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
