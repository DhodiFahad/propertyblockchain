import React from 'react';
import {Link} from 'react-router-dom';
import {FaTh,FaRegBell,FaFileInvoice, FaNapster } from 'react-icons/fa';
function Sidebar() {
    return (
        <div className='sidebar'>
           <Link to='/Home'><FaTh className='icon'/><span>Dashboard</span></Link>
           <Link to='/Home/Titles'><FaFileInvoice className='icon'/><span>My Land Titles</span></Link>
           <Link to='/Home/notifications'><FaRegBell className='icon'/><span>Notifications</span></Link>
           <Link to='/Home/Profile'><FaNapster className='icon'/><span>Profile</span></Link>
        </div>
    )
}

export default Sidebar
