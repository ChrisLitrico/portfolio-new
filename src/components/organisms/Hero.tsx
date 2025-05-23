import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef, useState } from 'react';

import CustomButton from '../atoms/CustomButton';
import HomeCharacter from '../atoms/HomeCharacter';
import { FaCode, FaHeart } from 'react-icons/fa';
import { FaBrain } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const characterContainerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const qualifications = ['Frontend Dev', 'Digital Humanist', 'Data Lover'];
  const qualificationIcons = [<FaCode />, <FaBrain />, <FaHeart />];

  const handleCharacterLoaded = () => {
    setLoading(false);
  };

  const handleQualificationClick = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    const nextIndex = (currentIndex + 1) % qualifications.length;
    setCurrentIndex(nextIndex);

    startTimer();
  };

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % qualifications.length);
    }, 5000);
  };

  useEffect(() => {
    if (!loading) {
      startTimer();
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [loading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (characterContainerRef.current) {
        characterContainerRef.current.style.opacity = '1';
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // GSAP animation for the clip path effect
  useGSAP(() => {
    gsap.set('#character-frame', {
      clipPath: 'inset(0 15.2% 14.8% 0)',
      borderRadius: '0 0 40% 10%',
    });

    gsap.from('#character-frame', {
      clipPath: 'inset(0% 0% 0% 0%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#character-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  });

  const currentQualification =
    qualifications[currentIndex % qualifications.length];
  const currentQualificationIcon =
    qualificationIcons[currentIndex % qualificationIcons.length];

  return (
    <div
      id="hero"
      className="relative h-dvh w-screen overflow-x-hidden bg-stone-100"
    >
      {loading && (
        // <!-- From Uiverse.io by G4b413l -->
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-zinc-950">
          {/* https://uiverse.io/elijahgummer/polite-earwig-72 */}
          <div className="hole">
            <i className="ring"></i>
            <i className="ring"></i>
            <i className="ring"></i>
            <i className="ring"></i>
            <i className="ring"></i>
            <i className="ring"></i>
            <i className="ring"></i>
            <i className="ring"></i>
            <i className="ring"></i>
            <i className="ring"></i>
          </div>
        </div>
      )}

      <div
        id="character-frame"
        className="relative z-10 h-dvh w-full pt-12 overflow-hidden rounded-[100%] bg-neutral-800"
      >
        {/* Video/Character Container */}
        <div
          ref={characterContainerRef}
          className="absolute size-full flex items-center md:z-42 justify-center opacity-0 transition-opacity duration-500"
        >
          {typeof window !== 'undefined' && window.innerWidth > 730 ? (
            <div className="relative scale-95">
              <HomeCharacter onLoad={handleCharacterLoaded} />
            </div>
          ) : (
            <div className="relative w-full h-full flex justify-center items-center">
              <video
                className="w-full h-full"
                src="/videos/hero.mp4"
                loop
                muted
                autoPlay
                playsInline
                onLoadedData={handleCharacterLoaded}
              />
            </div>
          )}
        </div>

        <h1 className="hero-heading absolute bottom-10 right-5 z-20 text-stone-100">
          Litrico
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-30 px-5 sm:px-10">
            <h1 className="hero-heading text-stone-100">Christian</h1>

            <CustomButton
              variant="primary"
              id="qualification"
              title={currentQualification}
              rightIcon={currentQualificationIcon}
              containerClass="bg-yellow-300 mt-5 md:mt-15 md:ml-17 text- flex-center gap-1"
              onClick={handleQualificationClick}
            />
          </div>
        </div>
      </div>
      <h1 className="hero-heading absolute bottom-10 right-5 text-neutral-800">
        Litrico
      </h1>
    </div>
  );
};

export default Hero;
