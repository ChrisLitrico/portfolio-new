import { useEffect, useState } from 'react';

const rawFaces = [
  { img: 'img/nodejs.png', alt: 'NodeJS' },
  { img: 'img/git.png', alt: 'Git' },
  { img: 'img/javascript.png', alt: 'Javascript' },
  { img: 'img/typescript.png', alt: 'Typescript' },
  { img: 'img/react.png', alt: 'React' },
  { img: 'img/vue.png', alt: 'Vue' },
  { img: 'img/tailwind.png', alt: 'Tailwind' },
  { img: 'img/mysql.png', alt: 'SQL' },
  { img: 'img/python.png', alt: 'Python' },
  { img: 'img/huggingface.png', alt: 'HuggingFace' },
  { img: 'img/excel.png', alt: 'Excel' },
];

const faces = rawFaces.map((face, index, arr) => ({
  ...face,
  angle: (360 / arr.length) * index,
}));

const SkillCarouselAtom = () => {
  const [translateZ, setTranslateZ] = useState(
    window.innerWidth < 730 ? 200 : 240,
  );

  useEffect(() => {
    const handleResize = () => {
      setTranslateZ(window.innerWidth < 730 ? 140 : 220);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <style>{`
        @keyframes rotate360 {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-540deg); }
        }

        .carousel-image {
          background-size: 60px 60px;
          width: 80px;
          height: 80px;
        }

        @media (min-width: 768px) {
          .carousel-image {
            background-size: 80px 80px;
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
      <div
        className="relative w-70 md:w-[320px] flex justify-center items-center mt-20 md:mt-22 mx-auto"
        style={{ perspective: '800px' }}
      >
        <div
          className="absolute w-full  [transform-style:preserve-3d]"
          style={{ animation: 'rotate360 30s linear infinite forwards' }}
        >
          {faces.map((face, index) => (
            <div
              key={index}
              className="carousel-image absolute bg-no-repeat bg-center flex"
              style={{
                backgroundImage: `url(${face.img})`,
                transform: `rotateY(${face.angle}deg) translateZ(${translateZ}px)`,
                left: '50%',
                top: '50%',
                marginLeft: window.innerWidth < 768 ? '-30px' : '-40px', // Half of width
                marginTop: window.innerWidth < 768 ? '-30px' : '-40px', // Half of height
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillCarouselAtom;
