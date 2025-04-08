import { FaDiscord, FaGoogle, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const links = [
    { href: 'https://youtube.com', icon: <FaYoutube /> },

    { href: 'https://google.com', icon: <FaGoogle /> },

    { href: 'https://discord.com', icon: <FaDiscord /> },

    { href: 'https://instagram.com', icon: <FaInstagram /> },
  ];

  return (
    <footer className="w-screen bg-violet-300 py-4 text-neutral-800">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Chris Portfolio Rights Reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-800 transition-colors duration-500 ease-in-out hover:text-stone-100"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy policy
        </a>
      </div>
    </footer>
  );
};
export default Footer;
