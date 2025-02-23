import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      // Reset form after 2 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 2000);
    }, 500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
          <p className="text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="form-control w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white font-medium transition duration-200 ${
              submitted 
                ? 'bg-success hover:bg-success/90' 
                : 'bg-primary hover:bg-primary/90'
            }`}
          >
            {submitted ? (
              <>
                <CheckCircle className="w-5 h-5" />
                <span>Message Sent!</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;