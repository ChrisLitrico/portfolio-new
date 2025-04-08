import CustomButton from '../atoms/CustomButton';
import ImageClipBox from '../atoms/ImageClipBox';

const Contact = () => {
  return (
    <div
      id="contacts"
      className="my-20 min-h-auto bg-stone-100  w-screen px-10"
    >
      <div className="relative rounded-lg  py-24 text-stone-100 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:let-20 lg:w-96">
          {/*<ImageClipBox clipClass="contact-clip-path-2 " src="img/about.webp" />*/}
          {/*<ImageClipBox
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
            src="img/contact-2.webp"
          />*/}
        </div>
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          {/*<ImageClipBox
            src="img/about.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />*/}
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-lg uppercase">
            Thanks for scrolling this far
          </p>
          <p className="font-anton mt-10 w-full mix-blend-difference relative z-10 font-circular-web text-5xl leading-[0.9] md:text-[6rem]">
            Now let's build something valuable togheter
          </p>

          <CustomButton
            id="contact-section"
            title="Contact me"
            containerClass="mt-10 bg-violet-300 text-center justify-center"
            cursorPointer
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
