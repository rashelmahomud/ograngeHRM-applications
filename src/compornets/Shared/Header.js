import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import logo from '../../Assacts/img/logo (2).png'


const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
};

  const navbermenu = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>


    {/* <li>{user ? <Link to="/dashboard">Dashboard</Link> : ""}</li>
  <li>{user ? <Link to="/admin">Admin</Link> : ""}</li> */}



  </>


  return (
    <div>
      <div className="navbar bg-base-300 bg-opacity-30 backdrop-filter backdrop-blur-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navbermenu}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to="/"><img className='w-8 h-8' src={logo} />OrangeHRM</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {navbermenu}
          </ul>
        </div>
        

          {user ? (<div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />

                </div>
              </label>
              <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <p>{user.displayName}</p>
                <li><a>Settings</a></li>
                <button onClick={logout} className="btn btn-active btn-ghost">Sign Out</button>
              </ul>
            </div>
          </div>) : (<button className="btn btn-outline btn-accent"><Link to="/login">login</Link></button>)}
        
      </div>
    </div>

  );
};

export default Header;