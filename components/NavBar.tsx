import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

import dynamic from "next/dynamic";

import { themeChange } from 'theme-change'




const NavBar: NextPage = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };

	useEffect(() => {
		themeChange(false)
	  }, [])
	// This is neccessary for allowing users to change the theme on page changes

	return (
        
		<div >
           
           <nav className='flex items-center flex-wrap bg-primary shadow-md p-6 px-10 md:px-20 w-full fixed backdrop-filter backdrop-blur-lg bg-opacity-30'>
                <Link href='/'>
                    <a className="cursor-pointer text-2xl font-medium underline py-6">
                        William Schneider
                    </a>
                </Link>
                <button
                className='inline-flex p-3 bg-cyan-500 hover:bg-cyan-400 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div
                className={`${
                    active ? '' : 'hidden'
                }   w-full lg:inline-flex lg:flex-grow lg:w-auto md:pt-0 pt-2`}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto '>
                        <Link href="/">
                            <a className="cursor-pointer hover:bg-cyan-500 text-grey-300 hover:text-white px-3 py-2 rounded-md md:text-xl font-medium">
                                Home
                            </a>
                        </Link>
                        <Link href="/about">
                            <a className="cursor-pointer hover:bg-cyan-500 text-grey-300 hover:text-white px-3 py-2 rounded-md md:text-xl font-medium">
                                About
                            </a>
                        </Link>
                        <Link href="/projects">
                            <a className="cursor-pointer hover:bg-cyan-500 text-grey-300 hover:text-white px-3 py-2 rounded-md md:text-xl font-medium">
                                Projects
                            </a>
                        </Link>
                        <Link href="/resume">
                            <a className="cursor-pointer hover:bg-cyan-500 text-grey-300 hover:text-white px-3 py-2 rounded-md md:text-xl font-medium">
                                Resume
                            </a>
                        </Link>
                        
                
                                
                        <div className="md:m-5 pt-4 md:pt-0">
                        
                            <select data-choose-theme className="focus:outline-none h-10 rounded-full px-3 border cursor-pointer">
                                <option value="day">Day</option>

                                <option value="black">Black</option>

                                <option value="night">Night</option>

                                <option value="coffee">Coffee</option>

                                <option value="retro">Retro</option>

                            </select>
                        </div>

           
                        {/* <div className="inline-block w-10">
                            <span data-toggle-theme="black,day" data-act-class="pl-4" className="border rounded-full border-green-700 flex items-center cursor-pointer w-10 transition-all duration-300 ease-in-out pl-0">
                                <span className="rounded-full w-3 h-3 m-1 bg-green-700">
                                </span>
                            </span>
                        </div> */}
                        
                    </div>
                </div>
            </nav>
    
		</div>
  );
};

export default NavBar;
