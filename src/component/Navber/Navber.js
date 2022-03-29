import React, { useState } from 'react';
import List from '../List/List';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Navber = () => {
    const [open, setOpen] = useState(false)
    const uilists = [
        { id: 1, name: 'home', link: '/home' },
        { id: 2, name: 'contuct', link: '/contuct' },
        { id: 3, name: 'about', link: '/about' },
        { id: 4, name: 'service', link: '/service' }
    ]
    return (
        <nav className='bg-indigo-300'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 bg-indigo-300 md:hidden '>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center md:static absolute  bg-indigo-300 w-full duration-500 ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    uilists.map(uilist => <List
                        key={uilist.id}
                        uilist={uilist}
                    ></List>)
                }
            </ul>
        </nav>
    );
};

export default Navber;