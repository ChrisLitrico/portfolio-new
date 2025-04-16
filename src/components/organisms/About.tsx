import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from '../molecules/AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    clipAnimation.to('.mask-clip-path_2', {
      width: window.innerWidth,
      height: window.innerHeight,
      borderRadius: 0,
    });
    window.addEventListener('resize', () => {
      ScrollTrigger.refresh();
    });

    return () => {
      window.removeEventListener('resize', () => {
        ScrollTrigger.refresh();
      });
    };
  });

  return (
    <div
      id="about"
      className="min-h-screen w-screen bg-gradient-to-b from-stone-100 from-0% to-neutral-800 to-100%"
    >
      <div className="relative mb-8 flex flex-col items-center gap-5">
        <h2 className="font-poppins text-sm text-neutral-800 uppercase md:text-lg">
          Welcome to my portfolio
        </h2>

        <AnimatedTitle
          title=" Front-end developer based in catania"
          containerClass="mt-5 !text-neutral-800 text-center"
        />
        <div className="about-subtext">
          <blockquote className="italic text-left mx-auto w-3/4 font-normal">
            "Treat people as ends in themselves, not as means to an end."
          </blockquote>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path_2 about-image">
          <img
            src="img/about.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
