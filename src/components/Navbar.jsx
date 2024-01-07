import React from 'react';

const Navbar = () => {

    return (
        <nav className='font-bold text-2xl uppercase w-full p-2'> {/* fixed z-[999] */}
            <ul className="nav w-auto text-center w-full flex justify-between text-white">
                <li className="relative inline-block">
                    <a className="inline-block px-5 py-2 line-height-32" href='/'>
                        Home
                    </a>
                </li>
                <li className="relative inline-block">
                    <a className="inline-block px-5 py-2 line-height-32" href="/posts">
                        Posts
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
