import type { NextPage } from "next";
import Head from 'next/head'
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from "react";






const About: NextPage = () => {
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
            <div className="md:pt-40 pt-32 mx-10 md:mx-20 ">
                <h1 className="text-2xl font-medium">About Me</h1>
                <h2 className="text-md pt-4 pb-4">(8 Min Read)</h2>
                <hr/>
                <p className="text-lg pt-4 pb-4 font-medium">INTRO</p>
                <p className="text-md pb-4">I am interested in learning about the intersection of business and technology. While I am working to Iearn what is necessary to become a Full Stack Engineer, I spend free time building side businesses. Having tried and tested an array of technical projects, I have learned first hand how difficult it is to build real value. While creating anything can be tough, nothing beats the feeling of seeing your work create impact. As I progress through life,  I become increasingly excited by the possibilities around me. 
                <br/>
                <br/>
                I used to argue the value of going to college, stating that I could just learn from experience. Now I can confidently say that a traditional education was well worth it and has transformed how I see the world. Throughout school I have found that I work best in small groups. The process of teaching and being taught is what keeps me engaged and focused. Additionally, I am happier in management roles, and wish to position myself accordingly. My dream job will allow me to become a better person and continue learning.
                </p>
                <p className="text-lg pt-4 pb-4 font-medium">CURRENTLY</p>
                <p className="text-md pb-4">
                While wrapping up my last year at Ohio State University, I spent part of the last six months building React web applications and simple Rust smart contracts. The majority of the projects I take on are through freelancing my web development and product management skills. I have also begun playing more
                <a href={"https://www.chess.com/member/willsc20"} target="_blank" rel="noopener noreferrer" className="text-cyan-500 underline-offset-4 font-bold"> chess. </a>
                Feel free to challenge me! 

                </p>
                <p className="text-lg pt-4 pb-4 font-medium">SOME HISTORY</p>
                <ul className="text-md pb-4 list-disc pl-10">
                    <li className="pb-2">At 4, I began <b>cross country skiing for the Hilltoppers</b>. My parents insisted that to snowboard I learn to ski nordic and alpine first.</li>
                    <li className="pb-2">At 5, I was playing a variety of <b>sports</b>, including tennis, baseball, and soccer. This ignited my competitive spirit.</li>
                    <li className="pb-2">At 6, I was given a Gameboy Advanced and my friend and I spent massive amounts of time on playing and trading Pokemon Ruby.  My crowning moment was catching a Deoxys. Those Masterballs came in handy.</li>
                    <li className="pb-2">At 7, I joined the <b>Cub Scouts</b> continuing through Webelos. I thought spending time in the woods with my family and friends sounded like fun. The enjoyment I found from scouts sparked my love for the great outdoors.</li>
                    <li className="pb-2">From 10-12, I played a ton of video games on Xbox 360. My favorites were Halo Reach and Battlefield 3.</li>
                    <li className="pb-2">At 13, I competed at the <b>International Children’s Games in UFA Russia</b> for cross country skiing. I loved exploring a whole new culture. I didn’t love getting frostbite on my ear after a race.</li>
                    <li className="pb-2">At 13, I <b>built my first desktop computer to kickstart my gaming youtube channel</b>. Although it is cringe so you will have to ask for the channel name in person.</li>
                    <li className="pb-2">At 14, I <b>shadowed at NASA glenn research center with a variety of engineers</b>. I especially enjoyed the wind tunnel and their awesome food truck.</li>
                    <li className="pb-2">At 15, I began to learn how to <b>program in Java</b> completing the intro to computer science class over the summer.</li>
                    <li className="pb-2">At 16, I took <b>AP computer science</b> with one of my all time favorite teachers. Pie Friday was awesome! I also built my first IOS application.</li>
                    <li className="pb-2">At 17, I continued with AP computer science principles and <b>built my first mobile game</b>. It was called <b>Trippy Climb and it used Spritekit</b>. I also attempted to build my first clothing brand with friends.</li>
                    <li className="pb-2">At 17, I <b>interned with a Ph D student at Kent State</b>. We were building a Naive Bayes algorithm to predict social impact of tweets.</li>
                    <li className="pb-2">At 18, I worked with a <b>startup called Proper Access</b> that worked to improve fiber optic wifi. I ended up helping with systems at Chick Fil A and a huge event called Startup Scaleup.</li>
                    <li className="pb-2">At 18, I built <b>my own clothing brand called Classz</b>. I learned how to outsource manufacturing and how to use digital marketing.</li>
                    <li className="pb-2">At 19, I did <b>business to business sales for a digital marketing agency</b>. I also transferred from Ohio University to Ohio State University.</li>
                    <li className="pb-2">At 20, I re-designed the website for my father’s dental practice:
                    <a href={"https://www.fairmountcircledentistry.com/"} target="_blank" rel="noopener noreferrer" className="text-cyan-500 underline-offset-4 font-bold"> https://www.fairmountcircledentistry.com/ </a> 
                    </li>
                    <li className="pb-2">At 21, I <b>delivered groceries to high risk individuals</b> during the Covid-19 outbreak.</li>
                    <li className="pb-2">At 21, I built a <b>prototype of a system to help retirement communities order groceries safely</b>.</li>
                </ul>
                <p className="text-lg pt-4 pb-4 font-medium">I LIKE</p>
                <ul className="text-md pb-4 list-disc pl-10">
                    <li className="pb-2">Machine Learning</li>
                    <li className="pb-2">Quantum</li>
                    <li className="pb-2">Blockchain</li>
                    <li className="pb-2">Hackathons</li>
                    <li className="pb-2">Running and Hiking</li>
                    <li className="pb-2">Skiing and Snowboarding</li>
                    <li className="pb-2">Space Exploration</li>
                    <li className="pb-2">Business</li>
                </ul>
                <p className="text-lg pt-4 pb-4 font-medium">FUN FACTS</p>
                <ul className="text-md pb-10 list-disc pl-10">
                    <li className="pb-2">I have jumped out of a plane twice. Luckily, I had a parachute.</li>
                    <li className="pb-2">I drove to New York with little planning to get on a radio show with my clothing brand. It didn’t work out.</li>
                    <li className="pb-2">I ran cross country and track all throughout high school. This is where I met many  of my best friends.</li>
                </ul>
            </div>  
        </div>
       
       
        
      <Footer/>
       
    </>
      

      

  )
}
export default About;