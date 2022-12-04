import type { NextPage } from "next";
import Head from 'next/head'
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import Image from 'next/image'
import React, { useState, useEffect } from "react";


import { TbBrandNextjs, TbBrandPython, TbBrandFigma } from "react-icons/tb";

import { SiUnrealengine, SiWebflow, SiPowershell, SiJavascript, SiAmazon, SiCplusplus, SiGooglecloud, SiTypescript } from "react-icons/si";

const Experience: NextPage = () => {
  return (
   <>

      <Head>
        <title>Wills Resume</title>
        <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Welcome to my custom portfolio site. 
                    Proudly built with: NextJS + Typescript."
          />
          <meta name="keywords" content="Portfolio, NextJS, React, Typescript, Tailwind, DaisyUI, Web3, Software Engineer, CSE"/>
          <meta name="author" content="William Schneider" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.80"
          />
          <meta name="url" content="https://www.wschneider.info/" />
          <link rel="icon" href="/favicon.ico" />
       
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
          />


        </Head>

        <div className="sticky z-50">
            <NavBar />
        </div>
      
        <div className="bg-base-200">
            <div className="pt-40 mx-10 md:mx-20 ">
        
                 {/*Exxaverse*/}
                <div className="hero">
                
                    <div className="flex-col hero-content lg:flex-row-reverse">
                        <Image src="/images/exxaverse.png" className="object-contain " alt="Weapons" width={600} height={600}/>
                        
                        <div className="md:m-10">
                            <h2 className="mb-5 font-bold text-2xl">
                            EXXAVERSE
                            </h2> 
                            <ul className="mb-5 text-lg list-disc pl-10 pb-5">
                            
                         
                                <li>Designed, developed, and deployed a NextJS website.</li> 
                                <li>Created NFT minting functionality on NEAR and Solana.</li>
                                <li className="pb-8">Produced $75,000 of revenue for the business from the mint.</li> 
    
                                <a href={"https://exxaverse.com/"} target="_blank" rel="noopener noreferrer" className="cursor-pointer bg-cyan-500 text-grey-300 hover:bg-cyan-400 text-white px-3 py-2 rounded-md md:text-xl font-medium">
                                    Website
                                </a>
                                
                            </ul>
                            <div className="inline-flex pl-5">
                                <TbBrandNextjs size={50}/>
                                <SiUnrealengine size={60} className="pl-5 pb-2"/>
                                <SiAmazon size={60} className="pl-5 pb-1"/>
                                <SiTypescript size={60} className="pl-5 pb-3"/>
                            </div>
                          
                        </div>
                    </div>
                </div>
    
                {/*Fairmount Circle Dentistry*/}
                <div className="hero">
                
                    <div className="flex-col hero-content lg:flex-row">

                        <Image src="/images/fairmount.png" className="object-contain" alt="FairmountCircle" width={600} height={600}/>
                        <div className="md:m-10">
                            <h2 className="mb-5 font-bold text-2xl">
                            FAIRMOUNT CIRCLE DENTISTRY
                            </h2> 
                            <ul className="mb-5 text-lg list-disc pl-10 pb-5">
                            
                         
                                <li>Managed team to design and deploy Webflow website.</li> 
                                <li>Enhanced SEO thru improved on-site metrics.</li>
                                <li className="pb-8">Increased new patient inquiries by 80% per month.</li> 
    
                                <a href={"https://www.fairmountcircledentistry.com/"} target="_blank" rel="noopener noreferrer" className="cursor-pointer bg-cyan-500 text-grey-300 hover:bg-cyan-400 text-white px-3 py-2 rounded-md md:text-xl font-medium">
                                    Website
                                </a>
                            </ul>
                            <div className="inline-flex pl-5">
                                <SiWebflow size={50}/>
                                <TbBrandFigma size={60} className="pl-5 pb-3"/>
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/*Ditch The Pitch*/}
                <div className="hero">
                
                    <div className="flex-col hero-content lg:flex-row-reverse">
                        <Image src="/images/imagerunner.png" className="object-contain" alt="3rdperson" width={600} height={600}/>
                        <div className="md:m-10">
                            <h2 className="mb-5 font-bold text-2xl ">
                            IMAGE RUNNER
                            </h2> 
                            <ul className="mb-5 text-lg list-disc pl-10 pb-5">
                            
                            <li>Implemented Google Cloud OCR to read hand written code.</li> 
                            <li>Presented our project in front of a few hundred people.</li>
                            <li className="pb-8">Placed third at Hyland hackathon in 2019.</li> 

                            <a href={"https://github.com/willschneider15/ImageRunner"} target="_blank" rel="noopener noreferrer" className="cursor-pointer bg-cyan-500 text-grey-300 hover:bg-cyan-400 text-white px-3 py-2 rounded-md md:text-xl font-medium">
                                Github
                            </a>
                            </ul>
                            <div className="inline-flex pl-5">
                                <TbBrandPython size={50}/>
                                <SiGooglecloud size={60} className="pl-5 pb-2"/>
                              
                            </div>

                        </div>
                    </div>
                </div>

                {/*NearLinker*/}

                <div className="hero">
                
                    <div className="flex-col hero-content lg:flex-row">
                        <Image src="/images/nearlinker.png" className="object-contain" alt="pvp" width={600} height={600}/>
                        <div className="md:m-10">
                            <h2 className="mb-5 font-bold text-2xl">
                            NEAR LINKER
                            </h2> 
                            <ul className="mb-5 text-lg list-disc pl-10 pb-5">
                            
                         
                                <li>Recieved grant funding from the Near Foundation to complete the open source project.</li> 
                                <li>Created a plan for connecting blockchains to game engines.</li>
                                <li className="pb-8">Manged two developers in the implementation of the project.</li> 
    
                                <a href={"https://github.com/willschneider15/NearLinker"} target="_blank" rel="noopener noreferrer" className="cursor-pointer bg-cyan-500 text-grey-300 hover:bg-cyan-400 text-white px-3 py-2 rounded-md md:text-xl font-medium">
                                    Github
                                </a>
                            </ul>
                            <div className="inline-flex pl-5">
                                <SiJavascript size={50}/>
                                <SiCplusplus size={65} className="pl-5 pb-4"/>
                                <SiPowershell size={70} className="pl-5 pb-5"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
        <Footer/>
       
    </>
      

      

  )
}
export default Experience;