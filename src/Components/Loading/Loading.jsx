import React from 'react';
import { SpinnerRoundOutlined } from 'spinners-react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-[75vh]'>
            <SpinnerRoundOutlined size={90} thickness={180} speed={180} color="#36ad47" />
        </div>
    );
};

export default Loading;