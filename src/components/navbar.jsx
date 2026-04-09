import React, { useState } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
            <div className='container mx-auto flex justify-between items-center'>

                {/* LOGO */}
                <div>
                    <a href="#" className='text-3xl font-bold text-white'>
                        Amar
                        <span className='text-emerald-400'>Mani</span>
                        <span className='inline-block w-2 h-2 ml-1 bg-cyan-400 rounded-full'></span>
                    </a>
                </div>

                {/* DESKTOP MENU */}
                <div className='hidden md:flex space-x-10'>
                    {["home", "about", "skills", "projects", "contact"].map((item, index) => (
                        <a
                            key={index}
                            href={`#${item}`}
                            className='relative text-white/80 transition duration-300 hover:text-emerald-400 group'
                        >
                            <span className='capitalize'>{item}</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full'></span>
                        </a>
                    ))}
                </div>

                {/* MOBILE ICON */}
                <div className='md:hidden text-white'>
                    {
                        showMenu ?
                            <FaXmark className='text-2xl cursor-pointer' onClick={() => setShowMenu(false)} /> :
                            <FaBars className='text-2xl cursor-pointer' onClick={() => setShowMenu(true)} />
                    }
                </div>
            </div>

            {/* MOBILE MENU */}
            {
                showMenu && (
                    <div className='md:hidden mt-4 bg-dark-300 rounded-lg p-4 flex flex-col space-y-4'>
                        {["home", "about", "skills", "projects", "contact"].map((item, index) => (
                            <a
                                key={index}
                                href={`#${item}`}
                                onClick={() => setShowMenu(false)}
                                className='text-white/80 hover:text-emerald-400 transition duration-300 capitalize'
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )
            }

        </nav>
    );
};

export default Navbar;