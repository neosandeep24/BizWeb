import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
// import { FiMenu, FiX } from "react-icons/fi";
// import { BiHome, BiBarChart, BiCalendar, BiUser, BiCog } from "react-icons/bi";
import { ProfileModal } from "./ProfileModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export const Dashboard = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: ""
  });
  const [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const newUsers = [...users, formData];
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", instagram: "", youtube: "" });
  };

  const activityData = [
    { name: "Week 1", Guest: 300, User: 400 },
    { name: "Week 2", Guest: 450, User: 320 },
    { name: "Week 3", Guest: 200, User: 150 },
    { name: "Week 4", Guest: 300, User: 310 },
  ];

  const pieData = [
    { name: "Basic Tees", value: 55, color: "#82ca9d" },
    { name: "Custom Short Pants", value: 31, color: "#ffc658" },
    { name: "Super Hoodies", value: 14, color: "#ff7300" },
  ];

  const statCards = [
    { title: "Total Revenue", value: "$2,129,430", icon: "💰", color: "bg-green-50" },
    { title: "Total Transactions", value: "1,520", icon: "📊", color: "bg-blue-50" },
    { title: "Total Likes", value: "9,721", icon: "❤️", color: "bg-purple-50" },
    { title: "Total Users", value: "892", icon: "👥", color: "bg-red-50" },
  ];

  return (
    <div className="flex h-screen bg-gray-50" >

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-6 lg:ml-0 overflow-y-auto hide-scrollbar">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <div className="w-full lg:w-auto">
            <div className="flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((card, index) => (
            <div
              key={index}
              className={`${card.color} p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-600 text-sm mb-2">{card.title}</p>
                  <h3 className="text-xl font-bold text-gray-800">{card.value}</h3>
                </div>
                <span className="text-2xl">{card.icon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Activities Chart */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Activities</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="User" fill="#82ca9d" />
                <Bar dataKey="Guest" fill="#ff7300" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          {/* Top Products */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Top Products</h3>
              <select className="text-sm border rounded-md p-1">
                <option>Last 30 days</option>
                <option>Last 60 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Add Profile */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col justify-center items-center">
            <div className="text-center mb-6">
              <p className="text-gray-600 text-lg mb-2">Add New Profile</p>
              <p className="text-sm text-gray-400">Create a new user profile</p>
            </div>
            <button
              className="w-16 h-16 bg-blue-600 text-white text-4xl rounded-full hover:bg-blue-700 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
              onClick={() => setIsModalOpen(true)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <ProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};