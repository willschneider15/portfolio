import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

import dynamic from "next/dynamic";

import { themeChange } from 'theme-change'




export default function NavBar(): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		themeChange(false)
	  }, [])
	// This is neccessary for allowing users to change the theme on page changes

	return (
        
		<div>
           
			<nav className="bg-primary shadow-md fixed w-full z-10 pt-5 pb-5">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center mx-10 md:mx-20  justify-between w-full">
							<div className="flex justify-left object-left flex-shrink-0 ">
								<Link href="/">
									<a className="cursor-pointer text-2xl font-medium underline">
										William Schneider
									</a>
								</Link>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
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
									<Link href="/experience">
										<a className="cursor-pointer hover:bg-cyan-500 text-grey-300 hover:text-white px-3 py-2 rounded-md md:text-xl font-medium">
											Experience
										</a>
									</Link>
									<Link href="/resume">
										<a className="cursor-pointer hover:bg-cyan-500 text-grey-300 hover:text-white px-3 py-2 rounded-md md:text-xl font-medium">
											Resume
										</a>
									</Link>
                                   
                          
                                            
									<div className="m-5">
									
										<select data-choose-theme className="focus:outline-none h-10 rounded-full px-3 border cursor-pointer">
											<option value="day">Day</option>
					
											<option value="black">Night</option>
					
										</select>
									</div>
                                            
                                  
									
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-cyan-500 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>

									<Link href="/">
										<a className="cursor-pointer hover:bg-cyan-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
											Home
										</a>
									</Link>
									<Link href="/game">
										<a className="cursor-pointer hover:bg-cyan-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
											Game
										</a>
									</Link>
									<Link href="/roadmap">
										<a className="cursor-pointer hover:bg-cyan-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
											Roadmap
										</a>
									</Link>
									<Link href="/rarity">
										<a className="cursor-pointer hover:bg-cyan-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
											Rarity
										</a>
									</Link>

									<Link href="/faq">
										<a className="cursor-pointer hover:bg-cyan-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
											FAQ
										</a>
									</Link>
                      
                                    

									
								
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
  );
};

