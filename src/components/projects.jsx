'use client'

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CaseInsightsProjects({ user }) {
  const [activeTab, setActiveTab] = useState('Case Studies');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    console.log("📦 Received user object:", user);

    if (user?.caseStudy && user.caseStudy.length > 0) {
      console.log("📋 Case Studies structure:", user.caseStudy[0]);
    }

    if (user?.project && user.project.length > 0) {
      console.log("🚀 Projects structure:", user.project[0]);
    }
  }, [user]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const currentData =
    activeTab === 'Case Studies' ? user?.caseStudy || [] : user?.project || [];

  const totalPages = Math.ceil(currentData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = currentData.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const getItemName = (item) => item.name || 'Untitled';
  const getItemImage = (item) => item.image || '';

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-[50vh]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-1">Case Insights &</h1>
          <h2 className="text-4xl font-bold text-gray-900">Key Projects</h2>
        </div>

        <div className="inline-flex gap-2 bg-gray-100 p-1 rounded-full shadow-sm">
          <button
            onClick={() => handleTabChange('Case Studies')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              activeTab === 'Case Studies' ? 'bg-white text-gray-900 shadow' : 'text-gray-500'
            }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => handleTabChange('Projects')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              activeTab === 'Projects' ? 'bg-white text-gray-900 shadow' : 'text-gray-500'
            }`}
          >
            Projects
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentItems.map((item, index) => {
          const itemName = getItemName(item);
          const itemImage = getItemImage(item);

          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={
                    itemImage
                      ? itemImage
                      : `https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=${encodeURIComponent(
                          itemName
                        )}`
                  }
                  alt={itemName}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=${encodeURIComponent(
                      itemName
                    )}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{itemName}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center w-full mt-8">
        <div className="flex gap-2 ml-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                currentPage === index + 1 ? 'bg-gray-700' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>

        <div className="flex gap-3 mr-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
