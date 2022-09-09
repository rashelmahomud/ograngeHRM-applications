import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assacts/img/logo (2).png'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content mt-10">
                <div>

                    <Link to="/" ><span className="footer-title"><img className='w-20' src={logo} alt="" /></span></Link>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Job</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>

            </footer>
            <div className="p-4 bg-black text-neutral-content">

                <p className='text-center'>2022 - {year} Copyright © Five Minite School.<br />All rights reserved.</p>

            </div>
        </div>
    );
};

export default Footer;