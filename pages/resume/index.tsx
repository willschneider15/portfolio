import type { NextPage } from "next";
import Head from 'next/head'
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import Image from 'next/image'
import React, { useState, useEffect } from "react";






const Resume: NextPage = () => {
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
            <div className="pt-48 pb-10  flex flex-col justify-center items-center">
                <Image src="/images/resume.png" className="object-contain" alt="pvp" width={1000} height={1000}/>
                <a href={"/Resume.pdf"} target="_blank" rel="noopener noreferrer" className="mt-10 cursor-pointer bg-cyan-500 text-grey-300 hover:bg-cyan-400 text-white px-3 py-2 rounded-md md:text-xl font-medium ">
                    Download
                </a>
            </div>

                
            
        </div>
        
        <Footer/>
       
    </>
      

      

  )
}
export default Resume;