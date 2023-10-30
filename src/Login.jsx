import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const[email , SetEmail] = useState();
    const[password , SetPassword] = useState();
    const[note, setNote] = useState(''); // Added state for the note
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://employeedatabase-weta.onrender.com/login', { email, password })
        .then(result => {
            if(result.data === "success"){
                navigate('/home')
            }
            else{
                setNote('Invalid login details. Please try again.'); // Update note state
            }
        })
        .catch(err => console.log(err))
    }

    
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
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
                        Login
                    </button>
                </form>
                <p className="text-center mt-4 text-red-500">{note}</p> {/* Display note */}
                <p className="text-center mt-4">
                    Don't have an account? <Link to="/register" className="text-blue-500">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
