import React from 'react';

export const Schedules = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Schedules</h2>
      <p className="text-gray-600">Manage your upcoming schedules and events.</p>
      <ul className="mt-4 list-disc pl-5">
        <li>Meeting with Team - 10:00 AM</li>
        <li>Project Deadline - 3:00 PM</li>
        <li>Client Call - 5:30 PM</li>
      </ul>
    </div>
  );
};