import React from 'react';
import { Link } from 'react-router-dom';

const Phm = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className='font-bold text-gray-400 text-center mb-2'>ChaHal <br /> Vadalmiya</h1>
                    <div class="avatar items-center justify-center">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 ">
                        <li><Link to="/professionDetails">Profession Detail</Link></li>
                        <li><Link to="/contactDetails">Contact Detail</Link></li>
                        <li><Link to="/EmerryGencyContact">Emergency Contact</Link></li>
                        <li><Link to="/job">Job</Link></li>
                        <li><Link to="/salary">Salary</Link></li>
                        <li><Link to="/qualification">Qualification</Link></li>
                        <li><Link to="/membership">Membership</Link></li>
                        <li><Link to="/report">Report-to</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Phm;