import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    
                    <li><Link to="/admin"><i class="fa-solid fa-user-gear"></i>User</Link></li>
                    <li><Link to="/admin/phm"><i class="fa-sharp fa-solid fa-users"></i>PIM</Link></li>
                    <li><Link to="/admin/leave"><i class="fa-solid fa-briefcase"></i>Leave</Link></li>
                    <li><Link to="/admin/time"><i class="fa-regular fa-clock"></i>Time</Link></li>
                    <li><Link to="/admin/myinfo"><i class="fa-solid fa-user-tie"></i>My Info</Link></li>
                    <li><Link to="/admin/dashboard"><i class="fa-solid fa-house-user"></i>Dashboard</Link></li>
                    
                </ul>

            </div>
        </div>
    );
};

export default Admin;