import { useRef } from 'react';
import gsap from 'gsap';

import RoundedCorners from '../atoms/RoundedCorners';
import AnimatedTitle from '../molecules/AnimatedTitle';
import CustomButton from '../atoms/CustomButton';

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
      <div className="flex size-full flex-col items-center py-2">
        <div className="relative size-full">
          <AnimatedTitle
            title="Beyond job and projects"
            containerClass="mt-5 pointer-events-none px-4 mix-blend-difference relative z-10"
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
                  src="/img/entrance.png"
                  alt="interests"
                  className="object-contain scale-85 md:scale-100"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>

        <div className="h-auto -mt-50 md:-mt-30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 mx-auto max-w-6xl w-full">
            <div className=" text-center justify-center shadow-md p-4">
              <h3 className="text-2xl text-center justify-center font-bold mb-2">
                Music
              </h3>
              <p className="text-left py-4">
                My true pair-coder, music can easily improve my mood and
                productivity.
                <br />
                Also in charge of my company's official playlist.
              </p>
              <CustomButton
                variant="secondary"
                src="/img/mono-playlist.png"
                href="https://open.spotify.com/playlist/06Z2keg6nDMW9oDNOuOmrp?si=J8UaGkUgQd6bo7_w8eduTA"
                altText="Official Mono playlist"
                title="Mono playlist"
                containerClass="max-w-xs"
              />
            </div>
            <div className=" text-center justify-center shadow-md p-4">
              <h3 className="text-2xl text-center justify-center font-bold mb-2">
                Podcasts
              </h3>
              <p className="text-left py-4">
                Keep me engaged with new ideas and perspectives, what I like
                about podcasts is that i can learn, laugh (or both) while
                walking my dog. <br /> Some favorites include:
              </p>
              <div className=" flex flex-col">
                <CustomButton
                  variant="secondary"
                  href="https://open.spotify.com/show/44fllCS2FTFr2x2kjP9xeT?si=ee1bfe61eba24aa7"
                  altText="Hard Fork podcast"
                  title="Hard Fork"
                  containerClass="max-w-xs py-2"
                />
                <CustomButton
                  variant="secondary"
                  href="https://open.spotify.com/show/6ShFMYxeDNMo15COLObDvC?si=052414490a404e9a"
                  altText="Tintoria podcast"
                  title="Tintoria"
                  containerClass="max-w-xs py-2"
                />
                <CustomButton
                  variant="secondary"
                  href="https://open.spotify.com/show/4MU3RFGELZxPT9XHVwTNPR?si=e2a0794c83004ac2"
                  altText="Pivot podcast"
                  title="Pivot"
                  containerClass="max-w-xs py-2"
                />
              </div>
            </div>
            <div className=" text-center justify-center shadow-md p-4">
              <h3 className="text-2xl text-center justify-center font-bold mb-2">
                Manga
              </h3>
              <p className="text-left py-4">
                I have a deep appreciation for the artistry and storytelling
                that goes into each manga page. <br /> If you don't know it yet
                here's a masterpiece
              </p>
              <CustomButton
                variant="secondary"
                src="/img/vagabond.png"
                href="https://www.youtube.com/watch?v=Rthaiu3hnqg"
                altText="Manga Image"
                title="Vagabond"
                containerClass="max-w-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Interests;
