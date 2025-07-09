'use client'
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function CaseInsightsProjects() {
  const [activeTab, setActiveTab] = useState('Case Studies');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Sample data for case studies
  const caseStudies = [
    {
      id: 1,
      name: 'ONDC Case Study',
      image: '/api/placeholder/300/200',
      description: 'Open Network for Digital Commerce implementation study'
    },
    {
      id: 2,
      name: 'Jal Jeevan Mission Case Study',
      image: '/api/placeholder/300/200',
      description: 'Water supply mission analysis and outcomes'
    },
    {
      id: 3,
      name: 'FinEasy Case Study',
      image: '/api/placeholder/300/200',
      description: 'Financial technology solution case study'
    },
    {
      id: 4,
      name: 'Digital Health Initiative',
      image: '/api/placeholder/300/200',
      description: 'Healthcare digitization case study'
    },
    {
      id: 5,
      name: 'Smart City Implementation',
      image: '/api/placeholder/300/200',
      description: 'Urban development technology case study'
    },
    {
      id: 6,
      name: 'E-Governance Platform',
      image: '/api/placeholder/300/200',
      description: 'Government service delivery case study'
    }
  ];

  // Sample data for projects
  const projects = [
    {
      id: 1,
      name: 'AI-Powered Analytics Platform',
      image: '/api/placeholder/300/200',
      description: 'Machine learning driven data analytics solution'
    },
    {
      id: 2,
      name: 'Mobile Banking Application',
      image: '/api/placeholder/300/200',
      description: 'Secure mobile banking platform development'
    },
    {
      id: 3,
      name: 'IoT Infrastructure Project',
      image: '/api/placeholder/300/200',
      description: 'Internet of Things connectivity solution'
    },
    {
      id: 4,
      name: 'Blockchain Supply Chain',
      image: '/api/placeholder/300/200',
      description: 'Transparent supply chain management system'
    },
    {
      id: 5,
      name: 'Cloud Migration Platform',
      image: '/api/placeholder/300/200',
      description: 'Enterprise cloud transformation project'
    },
    {
      id: 6,
      name: 'Cybersecurity Framework',
      image: '/api/placeholder/300/200',
      description: 'Comprehensive security implementation project'
    }
  ];

  const currentData = activeTab === 'Case Studies' ? caseStudies : projects;
  const totalPages = Math.ceil(currentData.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = currentData.slice(startIndex, endIndex);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      
      {/* Header + Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        {/* Heading */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-1">Case Insights &</h1>
          <h2 className="text-4xl font-bold text-gray-900">Key Projects</h2>
        </div>

        {/* Tabs */}
        <div className="inline-flex gap-2 bg-gray-100 p-1 rounded-full shadow-sm">
          <button
            onClick={() => handleTabChange('Case Studies')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              activeTab === 'Case Studies'
                ? 'bg-white text-gray-900 shadow'
                : 'text-gray-500'
            }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => handleTabChange('Projects')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              activeTab === 'Projects'
                ? 'bg-white text-gray-900 shadow'
                : 'text-gray-500'
            }`}
          >
            Projects
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=${encodeURIComponent(item.name)}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

 
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

  {/* Right aligned buttons */}
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
