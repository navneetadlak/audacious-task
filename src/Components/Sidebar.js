import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedbackIcon from '@mui/icons-material/Feedback';
import EventIcon from '@mui/icons-material/Event';
import ScheduleIcon from '@mui/icons-material/Schedule';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import WorkIcon from '@mui/icons-material/Work';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="flex h-full">
      {/* Left Section with Icons */}
      <div className="bg-gray-100 w-16 h-full flex flex-col items-center py-4">
        <div className="flex flex-col items-center space-y-4">
        <div className="bg-blue-500 w-10 ml-1 h-10 flex items-center justify-center rounded-full mb-6">
            <span className="text-white font-bold text-xl">NA</span>
            <hr />

            </div>

{/* 
          <DashboardIcon className="text-gray-600 hover:text-blue-500" />
          <FeedbackIcon className="text-gray-600 hover:text-blue-500" />
          <WorkIcon className="text-gray-600 hover:text-blue-500" /> */}
          <MonetizationOnIcon className="text-gray-600 hover:text-blue-500" />
          <AssessmentIcon className="text-gray-600 hover:text-blue-500" />
          <AccountBalanceWalletIcon className="text-gray-600 hover:text-blue-500" />
          <AttachMoneyIcon className="text-gray-600 hover:text-blue-500" />
          <CategoryIcon className="text-gray-600 hover:text-blue-500" />
          <SettingsIcon className="text-gray-600 hover:text-blue-500" />
          <EventIcon className="text-gray-600 hover:text-blue-500" />
          <ScheduleIcon className="text-gray-600 hover:text-blue-500" />
        </div>
        <div className="mt-auto">
          <LogoutIcon className="text-red-500 hover:text-red-700" />
        </div>
      </div>

      {/* Right Section with Text and Icons */}
      <div className="bg-gray-50 w-64 h-full p-4 flex flex-col">
        {/* Logo Section */}
        <div className="flex">
        

             {/* Search Section */}
        <div className="ml-3">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        </div>
        
        {/* Menu Items */}
        <div className="mt-6 flex-1 overflow-y-auto">
          <ul className="space-y-2">
            <li className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-lg">
              <DashboardIcon />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-lg">
              <FeedbackIcon />
              <span>Feedbacks</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-lg">
              <EventIcon />
              <span>Leaves</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-lg">
              <ScheduleIcon />
              <span>Attendance</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-lg">
              <WatchLaterIcon />
              <span>Daily Timesheet</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-lg">
              <WorkIcon />
              <span>Work Log</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-lg">
              <MonetizationOnIcon />
              <span>Reimbursements</span>
            </li>
            <hr />
            <li className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-lg">
              <AssessmentIcon />
              <span>Reports</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-lg">
              <AccountBalanceWalletIcon />
              <span>My Expenses</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-lg">
              <AttachMoneyIcon />
              <span>Income</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-lg">
              <CategoryIcon />
              <span>Categories</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-lg">
              <SettingsIcon />
              <span>Settings</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
