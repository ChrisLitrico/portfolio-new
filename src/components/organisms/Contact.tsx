import CustomButton from '../atoms/CustomButton';
import AnimatedTitle from '../molecules/AnimatedTitle';

const Contact = () => {
  return (
    <div
      id="contacts"
      className="py-20 min-h-auto bg-neutral-800 md:bg-stone-100 w-screen px-10"
    >
      <div className="relative rounded-lg  py-24 text-stone-100 sm:overflow-hidden bg-neutral-800">
        <div className="absolute -left-20 top-0 hidden h-full md:w-72 overflow-hidden sm:block lg:let-20 lg:w-96"></div>
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80"></div>
        <div className="flex flex-col items-center text-center">
          <p className="font-poppins text-lg uppercase">
            Thanks for scrolling this far
          </p>

          <AnimatedTitle
            title="Let's build something togheter"
            containerClass="py-12"
          />

          <CustomButton
            id="contact-section"
            title="Contact me"
            containerClass="mt-10 px-8 text-center justify-center rounded-lg bg-stone-100 md:px-16"
            variant="secondary"
            href="mailto:christianlitrico09@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
