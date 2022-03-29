import React from 'react';
import Benifit from '../Benifit/Benifit';
import { ArrowRightIcon } from '@heroicons/react/solid'

const Option = (props) => {
// console.log(props);
    const { name, price, banifits } = props.ption
    // console.log(banifits)
    return (
        <div className='bg-white p-4 rounded-lg'>
            <p className='bg-indigo-300 mb-2 font-bold p-3 text-2xl'>{name}</p>
            <p >
                <span className='text-5xl font-bold'> {price}</span>
                <span className='text-grey'>/mo</span>
            </p>
            <p className='text-left text-lg font-bold'>Banifits:</p>
            {
                banifits.map(benifit => <Benifit 
                benifit={benifit}
                ></Benifit>)
            }
            <button className='flex justify-center w-full items-center 
            bg-green-500 font-bold text-white p-2'>
                buy now <ArrowRightIcon className='w-5 h-5 ml-1 text-white'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default Option;