
import type { NextPage } from "next";
import Head from 'next/head'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Image from 'next/image'
import React, { useState, useEffect } from "react";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade";

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  EffectFade,
  EffectCoverflow,Pagination
} from 'swiper';


// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination, Autoplay]);



const Home: NextPage = () => {
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
      
      

        <div className="hero header bg-base-200 mx-auto z-0" >

       
      
          <div className="hero-content flex flex-col justify-center items-center">
            <div className="max-w-md md:pt-20 pt-10 mt-10 ">


              <Image src="/images/will.jpeg" alt="will" className="cursor-pointer object-center object-cover mask mask-squircle  align-center object-center justify-center" width={250} height={250}/>
            {/* <Swiper effect="fade" centeredSlides={true} modules={[EffectFade]} loop={true} slidesPerView={1}  autoplay={{
                "delay": 2000,
                
                "disableOnInteraction": false }} 


              
              pagination={false} breakpoints={{
                "640": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                },
                "768": {
                  "slidesPerView": 1,
                  "spaceBetween": 40
                },
                "1024": {
                  "slidesPerView": 1,
                  "spaceBetween": 10
                }}}className="mySwiper">
                <SwiperSlide > <Image src="/images/schneider.jpg" alt="will" className="cursor-pointer object-center object-cover mask mask-squircle  align-center object-center justify-center" width={250} height={250}/></SwiperSlide>
                <SwiperSlide > <Image src="/images/schneider1.jpg" alt="will" className="cursor-pointer object-center object-cover mask mask-squircle align-center object-center justify-center" width={250} height={250}/></SwiperSlide>
                <SwiperSlide > <Image src="/images/schneider2.jpg" alt="will" className="cursor-pointer object-center object-cover mask mask-squircle align-center object-center justify-center" width={250} height={250}/></SwiperSlide>
                <SwiperSlide > <Image src="/images/schneider3.jpg" alt="will" className="cursor-pointer object-center object-cover mask mask-squircle align-center object-center justify-center" width={250} height={250}/></SwiperSlide>
              </Swiper> */}
                 
                

              </div>

              <div className="bg-neutral py-10 px-10 mb-10 md:mb-0 text-center md:text-left">
                  <p className="py-6 text-lg ">I am a senior at <a href={"/about"} className="text-cyan-500 underline-offset-4 font-bold">Ohio State University</a> studying Computer Science Engineering with 
                   experience
                  in <a href={"/projects"} className="text-cyan-500 underline-offset-4 font-bold">web development</a> and business creation. 
                  I am driven by curiosity to apply the future of technology in my work. Read here 
                  <a href={"/about"} className="text-cyan-500 underline-offset-4 font-bold"> about </a> 
                  my wide ranging interests through multiple projects.  
                  I have attached my 
                  <a href={"/resume"} className="text-cyan-500 underline-offset-4 font-bold"> resume </a>
                  and I am actively seeking opportunities to advance my career.
                  </p>
                  <p className="text-lg">This website is open-source and available on 
                    <a href={"https://github.com/willschneider15/portfolio"} target="_blank" rel="noopener noreferrer" className="text-cyan-500 underline-offset-4 font-bold"> Github</a>.
                  </p>
              </div>
              {/* <LOGOS></LOGOS> */}
            </div>       
            
        </div>
        
      <Footer/>
       
    </>
      

      

  )
}
export default Home;