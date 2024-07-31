import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Sidebar.css';
import MainContent from './Main';
import { MdCastle, MdBarChart, MdDashboard, MdMail, MdModeEdit, MdCancelPresentation, MdMenu } from 'react-icons/md';

function Sidebar() {

  const [show, setShow] = useState(false);

  const toggleSidebar = () => {
    setShow(!show);
  }

  return (
    <div className='wrapper'>
      <div id='sidebar' className={`p-3 ${show ? 'show' : ''}`}>

            <a href='#' className='align-items-center pb-3 mb-3 text-decoration-none'>
              <MdCastle className='me-2'/>
              <span className='fs-5'>E SURAT</span>
            </a>

          <ul className='list-unstyled ps-0'>
            <li className='sidebar-nav'>
              <a src={MainContent} className='sidebar-item btn btn-secondary d-flex align-items-center text-decoration-none' type='button'>
                <MdDashboard className='ms-1 me-2'/>
                <span className='ms-1'>Dashboard</span>
              </a>
            </li>

            <li className='sidebar-nav'>
              <button className='sidebar-item d-flex align-items-center text-decoration-none'>
                <MdBarChart className='ms-1 me-2'/>
                <span className='ms-1'>Login Activity</span>
              </button>
            </li>

            <li>
              <button className='sidebar-item d-flex align-items-center text-decoration-none'>
                <MdMail className='ms-1 me-2' />
                <span className='ms-1'>Mail Box</span>
              </button>
              <div className='collapse'>
                <ul>
                  <li>
                    <a href='#'>Surat Masuk</a>
                  </li>
                  <li>
                    <a href='#'>Surat Keluar</a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <button className='sidebar-item d-flex align-items-center text-decoration-none'>
                <MdModeEdit className='ms-1 me-2' />
                <span className='ms-1'>Edit</span>
              </button>
              <div className='collapse'>
                <ul>
                  <li>
                    <a href='#'>Surat Masuk</a>
                  </li>
                  <li>
                    <a href='#'>Surat Keluar</a>
                  </li>
                </ul>
              </div>
            </li>

          </ul>

          <div className='dropdown'>
            <a href='#' className='d-flex align-items-center text-decoration-none dropdown-toggle' id='dropdownuser' data-bs-toggle='dropdown' aria-expanded='false'>
              <img
              src='../assets/xiao-kun.png'
              className='profile rounded-circle me-2' 
              />
              <span>Username</span>
            </a>

            <ul className='dropdown-menu' aria-labelledby='dropdownuser'>
              <li>
                <a href='#' className='dropdown-item'>Profile</a>
              </li>
              <li>
                <a href='#' className='dropdown-item'>Settings</a>
              </li>
            </ul>
          </div>

      </div>

      <div className='menubar d-flex flex-column bg-secondary'>
        <nav className='navbar navbar-expand px-3 border-bottom'>
          <button className='btn' id='sidebar-toggle' type='button' onClick={toggleSidebar}>
            <span className='navbar-toggler-icon'></span>
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar;