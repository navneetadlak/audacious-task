import React, { useState } from 'react';
import { Menu, MenuItem, Avatar, IconButton } from '@mui/material';
import { ArrowDropDown, Logout, Settings, AccountCircle } from '@mui/icons-material';

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="bg-white w-full p-4 flex justify-end items-center">
      {/* User Info Section */}
      <div className="flex items-center space-x-3 relative">
        <Avatar
          alt="Navneet"
          src="images/navneet.jpg.gif"
          className="w-10 h-10"
        />
        {/* <div>
          <p className="text-gray-800 font-semibold">Navneet Adlak</p>
          <p className="text-sm text-gray-500">UI/UX Developer</p>
        </div> */}
        <IconButton onClick={handleClick}>
          <ArrowDropDown />
        </IconButton>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 3,
            style: { width: '250px', padding: '10px' },
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <div className="flex items-center p-3 border-b">
            <Avatar alt="profile" src="images/navneet.jpg.gif" className="mr-3" />
            <div>
              <p className="text-gray-800 font-semibold">Navneet Adlak</p>
              <p className="text-sm text-gray-500">UI/UX Developer</p>
            </div>
          </div>
          <MenuItem onClick={handleClose}>
            <AccountCircle className="mr-2" />
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Settings className="mr-2" />
            Account Setting
          </MenuItem>
          <MenuItem onClick={handleClose} className="text-red-600">
            <Logout className="mr-2 text-red-600" />
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Topbar;
