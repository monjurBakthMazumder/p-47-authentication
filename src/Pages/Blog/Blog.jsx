import React from 'react';
import useAuth from '../../hooks/useAuth';
import SendUserEmailVerification from '../../Components/SendEmailVerification/SendEmailVerification';

const Blog = () => {
    const {user} = useAuth()
    return (
        <>
        {
             !user?.emailVerified
             ?
             <SendUserEmailVerification/>
             :
            <div className='flex justify-center items-center min-h-[75vh]'>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
                    No Blog Added
                </h1>
            </div>
        }
        </>
    );
};

export default Blog;