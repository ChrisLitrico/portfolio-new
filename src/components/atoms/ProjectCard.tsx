import ProjectStack from './ProjectStack';

type ProjectCardProps = {
  src: string;
  type: 'video' | 'img';
  title: any;
  description: string;
  classContainer?: string;
  stack?: string[];
  link?: string;
};

const ProjectCard = ({
  src,
  type,
  title,
  description,
  classContainer,
  stack,
  link,
}: ProjectCardProps) => {
  return (
    <div className="relative size-full">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {type === 'video' ? (
          <video
            src={src}
            loop
            muted
            autoPlay
            className={`absolute left-0 top-0 size-full object-contain md:object-cover bg-stone-100 object-center ${classContainer}`}
          />
        ) : (
          <img
            src={src}
            className={`absolute left-0 top-0 size-full object-cover object-center ${classContainer}`}
          />
        )}
        <div className="relative z-10 flex size-full flex-col justify-between p-2.5 md:p-5">
          <div>
            <h1 className="project-title font-anton text-violet-300">
              {title}
            </h1>
            {description && (
              <p className="md:mt-2 text-xs md:text-base text-neutral-800 w-2/5">
                {description}
              </p>
            )}
          </div>
          <ProjectStack stack={stack} />
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
