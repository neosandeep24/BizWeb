import React, { useState, useEffect } from 'react';
import { FiEdit2, FiTrash2, FiExternalLink } from 'react-icons/fi';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  const handleDeleteUser = (email) => {
    const updatedUsers = users.filter(user => user.email !== email);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">User Profiles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <FiEdit2 size={18} />
                </button>
                <button 
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDeleteUser(user.email)}
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.phone}</p>
              
              <div className="flex gap-4 mt-4">
                {user.instagram && (
                  <a 
                    href={user.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 flex items-center gap-1"
                  >
                    Instagram <FiExternalLink size={14} />
                  </a>
                )}
                {user.youtube && (
                  <a 
                    href={user.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800 flex items-center gap-1"
                  >
                    YouTube <FiExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
