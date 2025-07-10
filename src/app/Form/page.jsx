'use client';
import { useState } from 'react';
import { axiosInstanceMultipart } from '../../../shared/axiousintance';

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
    caseStudyImage: null,
    caseStudyDescription: '',
    youtubeLink: '',
    youtubeImage: null,
    about: '',
    gitLink: '',
    linkedinLink: '',
    skills: [],
  });

  const [newSkill, setNewSkill] = useState('');
  const [imagePreviews, setImagePreviews] = useState({
    image: null,
    projectImage: null,
    caseStudyImage: null,
    youtubeImage: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorDetails, setErrorDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, [name]: file }));
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreviews((prev) => ({
          ...prev,
          [name]: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (fieldName) => {
    setFormData((prev) => ({ ...prev, [fieldName]: null }));
    setImagePreviews((prev) => ({ ...prev, [fieldName]: null }));
    const fileInput = document.querySelector(`input[name="${fieldName}"]`);
    if (fileInput) fileInput.value = '';
  };

  const handleAddSkill = () => {
    const trimmedSkill = newSkill.trim();
    if (trimmedSkill && !formData.skills.includes(trimmedSkill)) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, trimmedSkill],
      }));
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorDetails(null);

    try {
      const submitData = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null && formData[key] !== '') {
          if (key === 'skills') {
            submitData.append(key, JSON.stringify(formData[key]));
          } else {
            submitData.append(key, formData[key]);
          }
        }
      });

      const response = await axiosInstanceMultipart.post('/createUser', submitData);
      alert('Form submitted successfully!');
    } catch (error) {
      let errorMessage = 'Unknown error occurred';
      let errorInfo = {
        type: 'Unknown',
        message: error.message || 'No message',
        code: error.code || 'No code',
      };

      if (error.response) {
        errorInfo = {
          type: 'Server Error',
          status: error.response.status,
          message: error.response.data?.message || error.response.data || 'Server error',
          data: error.response.data,
        };
        errorMessage = `Server Error (${error.response.status}): ${JSON.stringify(
          error.response.data
        )}`;
      } else if (error.request) {
        errorInfo = {
          type: 'Network Error',
          message: 'No response received from server',
          details: 'Check if backend server is running and accessible',
        };
        errorMessage = 'Network Error: No response from server.';
      } else {
        errorInfo = {
          type: 'Request Error',
          message: error.message,
          details: 'Error while setting up the request',
        };
        errorMessage = `Request Error: ${error.message}`;
      }

      setErrorDetails(errorInfo);
      alert(`ERROR: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Full Entry</h2>

      {errorDetails && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <h4 className="font-semibold text-red-800 mb-2">Error Details:</h4>
          <pre className="text-sm text-red-700 whitespace-pre-wrap">
            {JSON.stringify(errorDetails, null, 2)}
          </pre>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        <h3 className="text-lg font-semibold text-gray-700">Personal Details</h3>
        <input name="name" onChange={handleChange} value={formData.name} placeholder="Name" className="border p-2 rounded" required />
        <input name="age" type="number" onChange={handleChange} value={formData.age} placeholder="Age" className="border p-2 rounded" required />

        {/* ✅ Profile Image */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Profile Image</label>
          <input name="image" type="file" accept="image/*" onChange={handleFileChange} className="border p-2 rounded w-full" required />
          {imagePreviews.image && (
            <div className="relative inline-block">
              <img src={imagePreviews.image} alt="Profile preview" className="w-32 h-32 object-cover rounded border" />
              <button type="button" onClick={() => removeImage('image')} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600">×</button>
            </div>
          )}
        </div>

        {/* ✅ Gender Radio Buttons */}
      <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
  <div className="flex gap-4">
    <label className="flex items-center gap-1">
      <input
        type="radio"
        name="heOrShe"
        value="Male"
        checked={formData.heOrShe === 'Male'}
        onChange={handleChange}
        className="accent-blue-600"
        required
      />
      <span>Male</span>
    </label>
    <label className="flex items-center gap-1">
      <input
        type="radio"
        name="heOrShe"
        value="Female"
        checked={formData.heOrShe === 'Female'}
        onChange={handleChange}
        className="accent-pink-600"
        required
      />
      <span>Female</span>
    </label>
  </div>
</div>


        <input name="email" type="email" onChange={handleChange} value={formData.email} placeholder="Email" className="border p-2 rounded" required />
        <input name="phone" onChange={handleChange} value={formData.phone} placeholder="Phone" className="border p-2 rounded" required />

        <h3 className="text-lg font-semibold text-gray-700 mt-4">Project Details</h3>
        <input name="projectName" onChange={handleChange} value={formData.projectName} placeholder="Project Name" className="border p-2 rounded" required />
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Project Image</label>
          <input name="projectImage" type="file" accept="image/*" onChange={handleFileChange} className="border p-2 rounded w-full" required />
          {imagePreviews.projectImage && (
            <div className="relative inline-block">
              <img src={imagePreviews.projectImage} alt="Project preview" className="w-32 h-32 object-cover rounded border" />
              <button type="button" onClick={() => removeImage('projectImage')} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600">×</button>
            </div>
          )}
        </div>
        <textarea name="projectDescription" onChange={handleChange} value={formData.projectDescription} placeholder="Project Description" rows={3} className="border p-2 rounded" required />

        <h3 className="text-lg font-semibold text-gray-700 mt-4">Case Study Details</h3>
        <input name="caseStudyName" onChange={handleChange} value={formData.caseStudyName} placeholder="Case Study Name" className="border p-2 rounded" required />
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Case Study Image</label>
          <input name="caseStudyImage" type="file" accept="image/*" onChange={handleFileChange} className="border p-2 rounded w-full" required />
          {imagePreviews.caseStudyImage && (
            <div className="relative inline-block">
              <img src={imagePreviews.caseStudyImage} alt="Case Study preview" className="w-32 h-32 object-cover rounded border" />
              <button type="button" onClick={() => removeImage('caseStudyImage')} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600">×</button>
            </div>
          )}
        </div>
        <textarea name="caseStudyDescription" onChange={handleChange} value={formData.caseStudyDescription} placeholder="Case Study Description" rows={3} className="border p-2 rounded" required />

        <h3 className="text-lg font-semibold text-gray-700 mt-4">Links</h3>
        <input name="youtubeLink" onChange={handleChange} value={formData.youtubeLink} placeholder="YouTube Link" className="border p-2 rounded" />
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">YouTube Thumbnail Image</label>
          <input name="youtubeImage" type="file" accept="image/*" onChange={handleFileChange} className="border p-2 rounded w-full" />
          {imagePreviews.youtubeImage && (
            <div className="relative inline-block">
              <img src={imagePreviews.youtubeImage} alt="YouTube preview" className="w-32 h-32 object-cover rounded border" />
              <button type="button" onClick={() => removeImage('youtubeImage')} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600">×</button>
            </div>
          )}
        </div>

        <input name="gitLink" onChange={handleChange} value={formData.gitLink} placeholder="GitHub Link" className="border p-2 rounded" />
        <input name="linkedinLink" onChange={handleChange} value={formData.linkedinLink} placeholder="LinkedIn Link" className="border p-2 rounded" />
        <textarea name="about" onChange={handleChange} value={formData.about} placeholder="About" rows={3} className="border p-2 rounded" />

        <h3 className="text-lg font-semibold text-gray-700 mt-4">Skills</h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill and press Enter"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddSkill();
              }
            }}
            className="border p-2 rounded w-full"
          />
          <button
            type="button"
            onClick={handleAddSkill}
            className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {formData.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {skill}
              <button
                type="button"
                onClick={() => handleRemoveSkill(skill)}
                className="text-red-500 hover:text-red-700"
              >
                ×
              </button>
            </span>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`py-2 px-4 mt-2 rounded text-white ${
            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
}
