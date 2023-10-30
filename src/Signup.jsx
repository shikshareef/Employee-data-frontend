import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const[name , SetName] = useState();
    const[email , SetEmail] = useState();
    const[password , SetPassword] = useState();
    const navigate = useNavigate()
    

    //handling the data

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, password }); // Check if the data is being captured correctly
        axios.post('https://employeedatabase-weta.onrender.com/register', { name, email, password })
        .then(result => {console.log(result)
         navigate('/login')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded w-full py-2 px-3"
              placeholder="Your Name"
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
              onChange={(e)=> SetPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
