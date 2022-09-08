import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold'>Five Minite School</h1>
            <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">


                <ClimbingBoxLoader
                    color="#b17c05"
                    size={30}
                    speedMultiplier={1}
                />

            </div>
        </div>

    );
};

export default Loading;