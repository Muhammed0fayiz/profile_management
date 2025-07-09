'use client';
import { useState } from 'react';

export default function AddFullForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    image: null,
    heOrShe: '',
    email: '',
    phone: '',
    projectName: '',
    projectImage: null,
    projectDescription: '',
    caseStudyName: '',
    caseStudyImage: '',
    caseStudyDescription: '',
    youtubeLink: '',
    gitLink: '',
    linkedinLink: ''
  });

  const [imagePreviews, setImagePreviews] = useState({
    image: null,
    projectImage: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    
    if (file) {
      // Update form data with file
      setFormData((prev) => ({ ...prev, [name]: file }));
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreviews((prev) => ({
          ...prev,
          [name]: event.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (fieldName) => {
    setFormData((prev) => ({ ...prev, [fieldName]: null }));
    setImagePreviews((prev) => ({ ...prev, [fieldName]: null }));
    // Reset file input
    const fileInput = document.querySelector(`input[name="${fieldName}"]`);
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create FormData for file upload
    const submitData = new FormData();
    
    // Append all form fields
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null && formData[key] !== '') {
        submitData.append(key, formData[key]);
      }
    });
    
    console.log('Submitted Data:', formData);
    alert('Form submitted successfully!');
    // TODO: send submitData to backend
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Full Entry</h2>

      <div className="grid grid-cols-1 gap-4">
        {/* Personal Info */}
        <h3 className="text-lg font-semibold text-gray-700">Personal Details</h3>
        <input 
          name="name" 
          onChange={handleChange} 
          value={formData.name} 
          placeholder="Name" 
          className="border p-2 rounded" 
          required 
        />
        <input 
          name="age" 
          type="number" 
          onChange={handleChange} 
          value={formData.age} 
          placeholder="Age" 
          className="border p-2 rounded" 
          required 
        />
        
        {/* Profile Image Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Profile Image</label>
          <input 
            name="image" 
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border p-2 rounded w-full"
            required 
          />
          {imagePreviews.image && (
            <div className="relative inline-block">
              <img 
                src={imagePreviews.image} 
                alt="Profile preview" 
                className="w-32 h-32 object-cover rounded border"
              />
              <button
                type="button"
                onClick={() => removeImage('image')}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
              >
                ×
              </button>
            </div>
          )}
        </div>

        <input 
          name="heOrShe" 
          onChange={handleChange} 
          value={formData.heOrShe} 
          placeholder="He or She" 
          className="border p-2 rounded" 
          required 
        />
        <input 
          name="email" 
          type="email" 
          onChange={handleChange} 
          value={formData.email} 
          placeholder="Email" 
          className="border p-2 rounded" 
          required 
        />
        <input 
          name="phone" 
          onChange={handleChange} 
          value={formData.phone} 
          placeholder="Phone" 
          className="border p-2 rounded" 
          required 
        />

        {/* Project Info */}
        <h3 className="text-lg font-semibold text-gray-700 mt-4">Project Details</h3>
        <input 
          name="projectName" 
          onChange={handleChange} 
          value={formData.projectName} 
          placeholder="Project Name" 
          className="border p-2 rounded" 
          required 
        />
        
        {/* Project Image Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Project Image</label>
          <input 
            name="projectImage" 
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border p-2 rounded w-full"
            required 
          />
          {imagePreviews.projectImage && (
            <div className="relative inline-block">
              <img 
                src={imagePreviews.projectImage} 
                alt="Project preview" 
                className="w-32 h-32 object-cover rounded border"
              />
              <button
                type="button"
                onClick={() => removeImage('projectImage')}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
              >
                ×
              </button>
            </div>
          )}
        </div>

        <textarea 
          name="projectDescription" 
          onChange={handleChange} 
          value={formData.projectDescription} 
          placeholder="Project Description" 
          rows={3} 
          className="border p-2 rounded" 
          required 
        />

        {/* Case Study Info */}
        <h3 className="text-lg font-semibold text-gray-700 mt-4">Case Study Details</h3>
        <input 
          name="caseStudyName" 
          onChange={handleChange} 
          value={formData.caseStudyName} 
          placeholder="Case Study Name" 
          className="border p-2 rounded" 
          required 
        />
        <input 
          name="caseStudyImage" 
          onChange={handleChange} 
          value={formData.caseStudyImage} 
          placeholder="Case Study Image URL" 
          className="border p-2 rounded" 
          required 
        />
        <textarea 
          name="caseStudyDescription" 
          onChange={handleChange} 
          value={formData.caseStudyDescription} 
          placeholder="Case Study Description" 
          rows={3} 
          className="border p-2 rounded" 
          required 
        />

        {/* Links */}
        <h3 className="text-lg font-semibold text-gray-700 mt-4">Links</h3>
        <input 
          name="youtubeLink" 
          onChange={handleChange} 
          value={formData.youtubeLink} 
          placeholder="YouTube Link" 
          className="border p-2 rounded" 
        />
        <input 
          name="gitLink" 
          onChange={handleChange} 
          value={formData.gitLink} 
          placeholder="GitHub Link" 
          className="border p-2 rounded" 
        />
        <input 
          name="linkedinLink" 
          onChange={handleChange} 
          value={formData.linkedinLink} 
          placeholder="LinkedIn Link" 
          className="border p-2 rounded" 
        />

        <button 
          onClick={handleSubmit}
          className="bg-blue-600 text-white py-2 px-4 mt-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
}