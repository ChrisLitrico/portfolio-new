import { useRef, useState, useEffect } from 'react';

type ProjectTiltProps = {
  children: any;
  className: string;
};

export const ProjectTilt = ({ children, className = '' }: ProjectTiltProps) => {
  const [transformStyle, setTransformStyle] = useState('');
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const itemRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: any) => {
    if (!itemRef.current || !isDesktop) return;

    const { left, top, width, height } =
      //@ts-ignore
      itemRef.current?.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.96, .96, .96)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    setTransformStyle('');
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isDesktop ? { transform: transformStyle } : {}}
    >
      {children}
    </div>
  );
};
export default ProjectTilt;
