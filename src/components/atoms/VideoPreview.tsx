import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";

type VideoPreviewProps = {
  children: any

}

export const VideoPreview = ({ children }: VideoPreviewProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const sectionRef = useRef(null); 
  const contentRef = useRef(null); 

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = event;
    if (!currentTarget) return;
    const rect = currentTarget.getBoundingClientRect();

    const xOffset = clientX - (rect.left + rect.width / 2);
    const yOffset = clientY - (rect.top + rect.height / 2); 

    if (isHovering) {
      
      gsap.to(sectionRef.current, {
        x: xOffset,
        y: yOffset,
        rotationY: xOffset / 2, 
        rotationX: -yOffset / 2,
        transformPerspective: 500, 
        duration: 1,
        ease: "power1.out",
      });

      gsap.to(contentRef.current, {
        x: -xOffset,
        y: -yOffset,
        duration: 1,
        ease: "power1.out",
      });
    }
  };

  useEffect(() => {
    
    if (!isHovering) {
      gsap.to(sectionRef.current, {
        x: 0,
        y: 0,
        rotationY: 0,
        rotationX: 0,
        duration: 1,
        ease: "power1.out",
      });

      gsap.to(contentRef.current, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power1.out",
      });
    }
  }, [isHovering]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="absolute z-50 size-full overflow-hidden rounded-full"
      style={{
        perspective: "500px",
      }}
    >
      <div
        ref={contentRef}
        className="origin-center rounded-full"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default VideoPreview;
