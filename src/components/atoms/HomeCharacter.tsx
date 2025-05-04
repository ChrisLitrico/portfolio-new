import Spline from '@splinetool/react-spline';

const HomeCharacter = ({ onLoad }: { onLoad: () => void }) => {
  return (
    <Spline 
      scene="https://prod.spline.design/YQODGvnoEkdfOUfs/scene.splinecode"
      onLoad={onLoad}
    />
  );
};

export default HomeCharacter;
