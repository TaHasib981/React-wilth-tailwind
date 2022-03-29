import React from 'react';
import Option from '../Option/Option';
const Options = () => {
    const pricing = [
        { id: 1, name: 'Free', price: 0, banifits:[
            'lifetime free',
            'unlimited deals',
            'localized deals',
            'fantaastic deals',
            'creazy deals'
        ] },
        { id: 2, name: 'Regular', price: 9.99, banifits:[
            'lifetime free',
            'unlimited deals',
            'localized deals',
            'fantaastic deals',
            'creazy deals'
    ]},
        { id: 3, name: 'Premium', price: 19.99, banifits:[
            'lifetime free',
            'unlimited deals',
            'localized deals',
            'fantaastic deals',
            'creazy deals'
        ] }

    ]
    return (
        <div className='bg-indigo-200 mt-7 p-4'>
            <h1 className='text-white text-6xl'>Best Deals of the Town</h1>
            <p className='text-grey'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores ea expedit
            </p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricing.map(ption => <Option 
                    key={ption.id}
                    ption={ption}
                    ></Option> )
                }
            </div>
        </div>
    );
};

export default Options;