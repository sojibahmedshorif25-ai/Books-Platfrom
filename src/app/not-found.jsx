import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col space-y-5'>
            <h2 className='font-bold text-4xl text-primary'>This Page is Not Found.</h2>
            <Link href={"/"}><button className='btn text-white bg-primary'>Back To Home</button></Link>
        </div>
    );
};

export default NotFound;