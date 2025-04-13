import ProjectCard from '../atoms/ProjectCard';
import ProjectTilt from '../atoms/ProjectTilt';
import SkillsCarousel from '../atoms/SkillsCarousel';
import AnimatedTitle from '../molecules/AnimatedTitle';
import SplineTag from '../atoms/SplineTag';
import { FaAngellist } from 'react-icons/fa6';

const Features = () => {
  return (
    <section id="projects" className="bg-neutral-800">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-12 text-center">
          <AnimatedTitle title="Skills and works" containerClass="py-12" />

          <p className="md:mx-32 text-start font-circular-web text-lg text-stone-100 md:text-center opacity-50">
            Frontend Developer with proven expertise in Vue and React, currently
            working at a cutting-edge design agency. Specialized in crafting
            intuitive interfaces that transform complex concepts into
            exceptional user experiences.
            <br />
            Distinguished by the ability to balance independent work and team
            collaboration, bringing innovative solutions and strategic
            perspectives to every project.
          </p>
        </div>

        <ProjectTilt className="bg-neutral-900 relative mb-14 h-42 w-full overflow-hidden rounded-lg ">
          <SkillsCarousel />
        </ProjectTilt>

        <div className="grid h-[135vh] grid-cols-4 grid-rows-3 gap-7">
          <ProjectTilt className="project-tilt_1 md:row-span-2">
            <ProjectCard
              src="videos/project-1.mp4"
              type="video"
              title={<>bdibimbi</>}
              description="Ecommerce for kids"
              stack={[
                'vue',
                'typescript',
                'tailwind',
                'graphql',
                'datocms',
                'auth0',
                'vercel',
              ]}
            />
          </ProjectTilt>
          <ProjectTilt className="project-tilt_1 row-span-1 md:col-span-1 ms-0">
            <ProjectCard
              src="img/project-2.png"
              type="img"
              title={<>International ecommerce</>}
              description="Notorius brand"
              stack={['vue', 'typescript', 'algolia']}
            />
          </ProjectTilt>
          <ProjectTilt className="project-tilt_1  md:col-span-1 me-0">
            <ProjectCard
              src="img/project-3.png"
              type="img"
              classContainer=""
              title={<>Kaggle capstone</>}
              description="Project for Gen-AI intensive course"
              stack={['python', 'pandas', 'numpy']}
            />
          </ProjectTilt>

          <ProjectTilt className="project-tilt_2">
            <div className="flex w-full h-1/2 md:size-full flex-col justify-between bg-stone-100 p-5">
              <h1 className="project-title special-font max-w-64 text-violet-300">
                {' '}
                More coming soon!
              </h1>
              <FaAngellist className="m-5 scale-[5] self-end text-neutral-800" />
            </div>
          </ProjectTilt>
          <ProjectTilt className="project-tilt_2 absolute bg-neutral-100 w-full h-1/2 sm:size-full flex items-center justify-center">
            <div className="relative ml-8 md:ml-[25%] scale-42 md:scale-110">
              <SplineTag />
            </div>
          </ProjectTilt>
        </div>
      </div>
    </section>
  );
};
export default Features;
