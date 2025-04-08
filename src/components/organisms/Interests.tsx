import { useRef } from 'react';
import gsap from 'gsap';

import RoundedCorners from '../atoms/RoundedCorners';
import CustomButton from '../atoms/CustomButton';
import AnimatedTitle from '../molecules/AnimatedTitle';

const Interests = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = (element as HTMLElement).getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: 'power1.inOut',
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: 'power1.inOut',
      });
    }
  };

  return (
    <section
      id="interests"
      className="min-h-dvh py-12 w-screen bg-neutral-800 text-stone-100"
    >
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-lg md:text-lg text-stone-100">
          Let's talk about personal interests!
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="Beyond the Professional"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="/img/entrance.JPG"
                  alt="interests"
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>
        <div className="-mt-55 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end ">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className=" mt-3 sm:-mt-12 max-w-lg  text-start font-circular-web text-stone-100">
              I find joy and inspiration through various passions that fuel my
              creativity and perspective:
              <br />
              <b>Music:</b> serves as my constant companion. I appreciate [you
              could mention specific genres, artists, or how music influences
              your thinking/work].
              <br />
              <b>Podcasts:</b> keep me engaged with new ideas and perspectives.
              Some favorites include [mention 2-3 podcasts related to your field
              or other interests].
              <br />
              <b>Sociology & Communication:</b> remain interests beyond my
              academic background. I'm particularly fascinated by [specific
              aspects of human interaction, social dynamics, or communication
              theories that interest you personally].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Interests;
