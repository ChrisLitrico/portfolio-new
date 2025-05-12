import { useState } from 'react';
import { DiGoogleAnalytics, DiPython } from 'react-icons/di';
import { FaVuejs } from 'react-icons/fa';
import { FaAlgolia, FaReact } from 'react-icons/fa6';
import { RiGeminiFill, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiAuth0,
  SiDatocms,
  SiGraphql,
  SiLangchain,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiStrapi,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

type ProjectStackProps = {
  stack?: string[];
};

const ProjectStack = ({ stack }: ProjectStackProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const stackItem = [
    { name: 'vue', icon: <FaVuejs /> },
    { name: 'react', icon: <FaReact /> },
    { name: 'tailwind', icon: <RiTailwindCssFill /> },
    { name: 'typescript', icon: <SiTypescript /> },
    { name: 'python', icon: <DiPython /> },
    { name: 'pandas', icon: <SiPandas /> },
    { name: 'scikit', icon: <SiScikitlearn /> },
    { name: 'numpy', icon: <SiNumpy /> },
    { name: 'datocms', icon: <SiDatocms /> },
    { name: 'algolia', icon: <FaAlgolia /> },
    { name: 'graphql', icon: <SiGraphql /> },
    { name: 'auth0', icon: <SiAuth0 /> },
    { name: 'vercel', icon: <SiVercel /> },
    { name: 'langchain', icon: <SiLangchain /> },
    { name: 'gemini', icon: <RiGeminiFill /> },
    { name: 'googleAnalytics', icon: <DiGoogleAnalytics /> },
    { name: 'strapi', icon: <SiStrapi /> },
  ];

  if (!stack || stack.length === 0) {
    return null;
  }

  return (
    <div className="-mb-4">
      <div className="grid grid-cols-8 md:grid-cols-4 gap-x-2 md:gap-2 md:w-1/3">
        {stack.map((framework, index) => {
          const item = stackItem.find((item) => item.name === framework);
          return item ? (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center rounded p-2 transition-all"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="text-md md:text-xl text-neutral-800">
                {item.icon}
              </div>

              {hoverIndex === index && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-xs py-1 px-2 rounded-sm whitespace-nowrap z-20">
                  {framework.charAt(0).toUpperCase() + framework.slice(1)}
                </div>
              )}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default ProjectStack;
