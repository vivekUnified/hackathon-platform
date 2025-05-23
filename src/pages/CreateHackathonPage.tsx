import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateHackathonPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [prize, setPrize] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // In a real application, you would send this data to the backend to create a new hackathon
    const newHackathon = { title, description, startDate, endDate, location, prize };
    console.log('Creating new hackathon:', newHackathon);
    alert('New hackathon created!');
    // After successful creation, you might want to redirect to the admin hackathons list
    navigate('/admin/hackathons');
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Create New Hackathon</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="startDate" className="block text-gray-700 text-sm font-bold mb-2">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block text-gray-700 text-sm font-bold mb-2">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="prize" className="block text-gray-700 text-sm font-bold mb-2">
            Prize
          </label>
          <input
            type="text"
            id="prize"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={prize}
            onChange={(e) => setPrize(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Hackathon
          </button>
          <Link to="/admin/hackathons" className="inline-block align-baseline font-semibold text-blue-500 hover:text-blue-800">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateHackathonPage;