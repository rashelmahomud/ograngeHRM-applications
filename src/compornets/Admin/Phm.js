import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import ProfessionDetails from './Pim/ProfessionDetails';

const Phm = () => {

    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <loading></loading>
    }
    return (
        <div>
            <div className='grid grid-rows-3 grid-flow-col gap-4'>
                <div class="card w-96 bg-base-100 shadow-xl lg:row-span-3">
                    <div class="card-body">
                        <h1 className='font-bold text-gray-400 text-center mb-2'>ChaHal <br /> Vadalmiya</h1>
                        <div class="avatar items-center justify-center">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL} />
                            </div>
                        </div>

                        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 font-bold text-gray-500 ">
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

                {/* right site  */}
                <div class="card bg-base-100 shadow-xl lg:col-span-2 z-0">
                    <div class="card-body">
                        <ProfessionDetails></ProfessionDetails>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Phm;