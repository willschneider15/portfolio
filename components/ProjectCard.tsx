import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  projectUrl: string;
  techStack: React.ReactNode[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  projectUrl,
  techStack
}) => {
  return (
    <Link href={projectUrl} target="_blank" rel="noopener noreferrer" className="block">
      <div className="cursor-pointer bg-base-100 hover:bg-base-200 transition-colors duration-200 rounded-lg border border-base-300 shadow-lg overflow-hidden h-full max-w-lg mx-auto">
        <Image 
          src={imageSrc} 
          className="w-full h-56 object-fill" 
          alt={imageAlt} 
          width={600} 
          height={300}
        />
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="badge badge-primary">Project</span>
          </div>
          <h2 className="mb-4 font-bold text-2xl">
            {title}
          </h2> 
          <p className="text-gray-600 mb-4">{description}</p>
          <ul className="mb-4 text-sm list-disc pl-5 space-y-1">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="flex items-center gap-3 pt-3 border-t border-base-200">
            {techStack.map((tech, index) => (
              <div key={index}>{tech}</div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard; 