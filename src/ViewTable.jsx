import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewTable = () => {
  const [data, setData] = useState([]);

  //handling the data 
  const handleDelete = (id) => {
    axios.delete(`https://employeedatabase-weta.onrender.com/${id}`)
      .then(response => {
        // Update the data after successful deletion
        if(response.status ==200){
            alert("Employee deleted successfully")
            window.location.reload();
        }
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };

  useEffect(() => {
    axios.get('https://employeedatabase-weta.onrender.com/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1 className='text-center font-serif text-xl bg-amber-400'>Data Table</h1>
      <table className='mx-auto border border-collapse border-gray-800 mt-2'>
        <thead>
          <tr>
            <th className='text-center'>Name</th>
            <th className='text-center'>Email</th>
            <th className='text-center'>Password</th>
            <th className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr className='py-3 px-2' key={item._id}>
              <td className='px-2 py-1'>{item.name}</td>
              <td className='px-2 py-1'>{item.email}</td>
              <td className='px-2 py-1'>{item.password}</td>
              <td className='px-2 py-1'>
              <Link to={`/${item._id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  EDIT
                </button>
                </Link>
              </td>
              <td className='px-2 py-1'>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(item._id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTable;
