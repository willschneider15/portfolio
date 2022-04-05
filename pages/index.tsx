
   
import type { NextPage } from "next";
import Head from 'next/head'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from 'next/image'
import Link from 'next/link'

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

      <NavBar/>

        <div className="hero header bg-base-200 mx-auto" >
          <div className="hero-content flex flex-col justify-center items-center">
            <div className="max-w-md pt-10">


                <Link href="/token">
                  <Image src="/images/schneider.jpg" alt="token" className="cursor-pointer object-center object-cover mask mask-squircle object-center" width={300} height={300}/>
                </Link>

              </div>

              <div className="bg-neutral py-10 px-10">
                  <p className="py-6 text-lg">I am currently a Senior at the Ohio State University. 
                  I am learning to become a Software Engineer. 
                  Read about my interest in applying the future of technology. 
                  Journey through my projects to see how my curiosity drives me. 
                  Additionally, feel free to check out my resume. Actively seeking opportunities to advance my career.
                  </p>
                  <p className="text-lg">P.S. this website is open-source and available on Github.</p>


              </div>
              
            </div>
            
        </div>
        
<Footer/>
       

  </>
      

      

  )
}
export default Home;