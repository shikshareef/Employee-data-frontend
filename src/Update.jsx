import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSingleUser = async () => {
      try {
        const response = await axios.get(`https://employeedatabase-weta.onrender.com/${id}`);
        const user = response.data;
        SetName(user.name);
        SetEmail(user.email);
        SetPassword(user.password);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    if (id) {
      getSingleUser();
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:3001/${id}`, { name, email, password })
      .then((response) => {
        if (response.status === 200) {
          navigate('/all');
          alert("Data Edited successfully");
        }
      })
      .catch((error) => {
        console.error("Error editing data:", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Update User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded w-full py-2 px-3"
              placeholder="Your Name"
              value={name}
              onChange={(e)=> SetName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded w-full py-2 px-3"
              placeholder="you@example.com"
              value={email}
              onChange={(e)=> SetEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded w-full py-2 px-3"
              placeholder="********"
              value={password}
              onChange={(e)=> SetPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
