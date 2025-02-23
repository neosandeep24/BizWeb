import { Outlet, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { BiHome, BiBarChart, BiCalendar, BiUser, BiCog } from "react-icons/bi";
import { useState } from "react";
import "./App.css";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const sidebarItems = [
    { name: "Dashboard", icon: <BiHome className="text-xl" />, path: "/" },
    { name: "Transactions", icon: <BiBarChart className="text-xl" />, path: "/transactions" },
    { name: "Schedules", icon: <BiCalendar className="text-xl" />, path: "/schedules" },
    { name: "Users", icon: <BiUser className="text-xl" />, path: "/users" },
    { name: "Settings", icon: <BiCog className="text-xl" />, path: "/settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 hide-scrollbar">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-600 text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static w-64 h-full bg-blue-600 text-white p-5 
          flex flex-col justify-between transition-transform duration-300 ease-in-out z-40
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div>
          <h1 className="text-2xl font-bold">Board.</h1>
          <ul className="mt-8 space-y-4">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => navigate(item.path)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 transition-colors duration-200 w-full text-left"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <button onClick={() => navigate('/help')} className="block text-sm hover:text-blue-200 transition-colors">
            Help
          </button>
          <button onClick={() => navigate('/contact')} className="block text-sm hover:text-blue-200 transition-colors">
            Contact Us
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-6 lg:ml-0 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;