import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';

type AnimatedTitle = {
  title: string;
  containerClass: string;
};

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }: AnimatedTitle) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initial setup for mobile - set elements to their final state
    gsap.set('.animated-word', {
      opacity: 1,
      transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
    });

    // Create animation only for desktop (min-width: 768px)
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      // Reset the initial state for desktop
      gsap.set('.animated-word', {
        opacity: 0,
        transform: 'translate3d(0, 50px, 0) rotateY(10deg) rotateX(-90deg)',
      });

      const ctx = gsap.context(() => {
        const titleAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: '100 bottom',
            end: 'center bottom',
            toggleActions: 'play none none reverse',
          },
        });

        titleAnimation.to(
          '.animated-word',
          {
            opacity: 1,
            transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
            ease: 'power2.inOut',
            stagger: 0.02,
          },
          0,
        );
      }, containerRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={containerRef} className={clsx('animated-title', containerClass)}>
      {title.split('<br />').map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 md:px-10 md:gap-3"
        >
          {line.split(' ').map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
