'use client'
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../shared/axiousintance';

axiosInstance
export default function ProfileCard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users from backend
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/users');
        setUsers(response.data); // assuming response is an array of user objects
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
              <div className="relative h-80 sm:h-96 lg:h-80 rounded-xl overflow-hidden shadow-lg bg-white">
                
                {/* Orange Top */}
                <div className="h-1/2 bg-orange-400 w-full"></div>

                {/* Gray Bottom */}
                <div className="h-1/2 bg-gray-100 w-full absolute bottom-0 left-0 px-4 sm:px-6">
                  
                  {/* Profile initials */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white overflow-hidden shadow-md -mt-8 sm:-mt-10 lg:-mt-12 bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center">
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-white">
                        {user.fullName?.split(" ").map(word => word[0]).join("")}
                      </div>
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="text-center mt-3 sm:mt-4 pb-4">
                    <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                      {user.fullName}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {user.email}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
