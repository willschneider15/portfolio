import type { NextPage } from "next";
import Head from 'next/head'
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";

import { TbBrandNextjs, TbBrandPython, TbBrandFigma } from "react-icons/tb";
import { SiUnrealengine, SiWebflow, SiPowers, SiJavascript, SiAmazon, SiCplusplus, SiGooglecloud, SiTypescript, SiFirebase, SiStripe } from "react-icons/si";

const Blog: NextPage = () => {
  const projects = [
    {
      title: "REACT SAAS",
      description: "A complete full stack application template to get you started on your next project.",
      features: [
        "Leveraging Firebase for authentication and database.",
        "Using Stripe for one-time and recurring payments.",
        "Integrated CI/CD pipelines with dev and prod environments."
      ],
      imageSrc: "/images/react-saas.jpg",
      imageAlt: "ReactSaaS",
      projectUrl: "https://github.com/willschneider15/template-reactsaas",
      techStack: [
        <TbBrandNextjs key="nextjs" size={24}/>,
        <SiFirebase key="firebase" size={24}/>,
        <SiStripe key="stripe" size={24}/>
      ]
    },
    {
      title: "EXXAVERSE",
      description: "A comprehensive look at building and deploying an NFT minting platform that generated $75,000 in revenue.",
      features: [
        "Designed, developed, and deployed a NextJS website.",
        "Created NFT minting functionality on NEAR and Solana.",
        "Produced $75,000 of revenue for the business from the mint."
      ],
      imageSrc: "/images/exxaverse.jpg",
      imageAlt: "EXXAVERSE",
      projectUrl: "https://x.com/exxaverse",
      techStack: [
        <TbBrandNextjs key="nextjs" size={24}/>,
        <SiUnrealengine key="unreal" size={24}/>,
        <SiAmazon key="amazon" size={24}/>,
        <SiTypescript key="typescript" size={24}/>
      ]
    },
    {
      title: "FAIRMOUNT CIRCLE DENTISTRY",
      description: "How a strategic website redesign and SEO optimization increased new patient inquiries by 80% per month.",
      features: [
        "Managed team to design and deploy Webflow website.",
        "Enhanced SEO thru improved on-site metrics.",
        "Increased new patient inquiries by 80% per month."
      ],
      imageSrc: "/images/fairmount.jpg",
      imageAlt: "FairmountCircle",
      projectUrl: "https://www.fairmountcircledentistry.com/",
      techStack: [
        <SiWebflow key="webflow" size={24}/>,
        <TbBrandFigma key="figma" size={24}/>
      ]
    },
    {
      title: "IMAGE RUNNER",
      description: "Building an OCR application that reads handwritten code and placed third at the Hyland hackathon in 2019.",
      features: [
        "Implemented Google Cloud OCR to read hand written code.",
        "Presented our project in front of a few hundred people.",
        "Placed third at Hyland hackathon in 2019."
      ],
      imageSrc: "/images/imagerunner.png",
      imageAlt: "ImageRunner",
      projectUrl: "https://github.com/willschneider15/ImageRunner",
      techStack: [
        <TbBrandPython key="python" size={24}/>,
        <SiGooglecloud key="googlecloud" size={24}/>
      ]
    },
    {
      title: "NEAR LINKER",
      description: "An open-source project connecting blockchains to game engines, funded by the Near Foundation.",
      features: [
        "Recieved grant funding from the Near Foundation to complete the open source project.",
        "Created a plan for connecting blockchains to game engines.",
        "Manged two developers in the implementation of the project."
      ],
      imageSrc: "/images/nearlinker.png",
      imageAlt: "NearLinker",
      projectUrl: "https://github.com/willschneider15/NearLinker",
      techStack: [
        <SiJavascript key="javascript" size={24}/>,
        <SiCplusplus key="cpp" size={24}/>,
        <SiPowers key="powers" size={24}/>
      ]
    }
  ];

  return (
   <>

      <Head>
        <title>William Schneider - Blog & Case Studies</title>
        <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Technical case studies and insights from my work as a cloud engineer and full-stack developer."
          />
          <meta name="keywords" content="Portfolio, NextJS, React, Typescript, Tailwind, DaisyUI, Web3, Software Engineer, CSE, Cloud Engineer, Case Studies"/>
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
            <div className="pt-40  mx-10 md:mx-20 md:pb-40 pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-y-16 gap-y-8 gap-x-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        features={project.features}
                        imageSrc={project.imageSrc}
                        imageAlt={project.imageAlt}
                        projectUrl={project.projectUrl}
                        techStack={project.techStack}
                      />
                    ))}
                </div>
            </div>
        </div>
        
        <Footer/>
       
    </>
      

      

  )
}
export default Blog;