import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid'

const Benifit = (props) => {
    // console.log(props.benifit);
    return (
        <div>
            <h1 className='flex items-center' >
                 <CheckCircleIcon className='w-4 h-4 mr-1 text-green-500'></CheckCircleIcon>
                 {props.benifit}</h1>
        </div>
    );
};

export default Benifit;