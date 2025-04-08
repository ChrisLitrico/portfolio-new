import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef, useState } from 'react';

import CustomButton from '../atoms/CustomButton';
import VideoPreview from '../atoms/VideoPreview';
import { FaCode } from 'react-icons/fa';
import { FaBrain, FaGamepad } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const currentVideoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const qualifications = ['Frontend Dev', 'Digital Humanist', 'Ancient Geek'];
  const qualificationIcons = [<FaCode />, <FaBrain />, <FaGamepad />];

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => {
      const newCount = prev + 1;
      // Check if we've loaded enough videos to start displaying content
      if (newCount >= totalVideos) {
        setLoading(false);
      }
      return newCount;
    });
  };
  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVideoClick = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setIsFirstLoad(false);

    const nextIndex = (currentIndex + 1) % totalVideos;
    setCurrentIndex(nextIndex);

    startTimer();
  };

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setIsFirstLoad(false);
      setCurrentIndex((prev) => (prev + 1) % totalVideos);
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
    if (!loading && currentVideoRef.current) {
      currentVideoRef.current.play().catch((error) => {
        console.error('Error playing current video:', error);
      });
    }
  }, [loading, currentIndex]);

  useGSAP(
    () => {
      if (isFirstLoad) {
        // First load animation logic
        if (currentVideoRef.current) {
          gsap.fromTo(
            currentVideoRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, ease: 'power1.inOut' },
          );
        }
      } else {
        gsap.set('#next-video', { visibility: 'visible' });
        gsap.to('#next-video', {
          transformOrigin: 'center center',
          scale: 1,
          width: '100%',
          height: '100%',
          duration: 1.5,
          ease: 'power1.inOut',
          onStart: () => {
            nextVideoRef.current?.play().catch((error) => {
              console.error('Error playing video:', error);
            });
          },
        });
      }

      gsap.from('#current-video', {
        transformOrigin: 'center center',
        scale: 0,
        duration: 1.5,
        ease: 'power1.inOut',
      });
    },

    { dependencies: [currentIndex], revertOnUpdate: true },
  );

  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: ' inset(0 15.2% 14.8% 0)',
      borderRadius: '0 0 40% 10%',
    });

    gsap.from('#video-frame', {
      clipPath: 'inset(0% 0% 0% 0%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  });

  const getVideoSrc = () =>
    `/videos/hero-${(currentIndex % totalVideos) + 1}.mp4`;
  const getNextVideoSrc = () =>
    `/videos/hero-${((currentIndex + 1) % totalVideos) + 1}.mp4`;

  const currentQualification =
    qualifications[currentIndex % qualifications.length];
  const currentQualificationIcon =
    qualificationIcons[currentIndex % qualificationIcons.length];

  return (
    <div id="hero" className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
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
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-[100%] bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-40 cursor-pointer overflow-hidden rounded-[100%]">
            <VideoPreview>
              <div
                onClick={handleMiniVideoClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={nextVideoRef}
                  src={getNextVideoSrc()}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </VideoPreview>
          </div>

          <video
            ref={nextVideoRef}
            src={getNextVideoSrc()}
            loop
            muted
            id="next-video"
            className="absolute-center hidden absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            ref={currentVideoRef}
            src={getVideoSrc()}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-contain bg-neutral-800 object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="hero-heading absolute bottom-10 right-5 z-40 text-stone-100">
          Litrico
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-30 px-5 sm:px-10">
            <h1 className="hero-heading text-stone-100">Christian</h1>

            <CustomButton
              id="qualification"
              title={currentQualification}
              rightIcon={currentQualificationIcon}
              containerClass="bg-yellow-300 mt-5 md:mt-15 md:ml-17 text- flex-center gap-1"
              onClick={handleMiniVideoClick}
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
