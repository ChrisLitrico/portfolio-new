import { FaGithub, FaKaggle, FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => {
  const links = [
    { href: 'https://www.kaggle.com/christianlitrico', icon: <FaKaggle /> },
    {
      href: 'https://www.linkedin.com/in/christianlitrico/',
      icon: <FaLinkedinIn />,
    },
    { href: 'https://github.com/ChrisLitrico', icon: <FaGithub /> },
  ];

  return (
    <footer className="w-screen bg-violet-300 py-4 text-neutral-800">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Chris Portfolio Rights Reserved
        </p>
        <div className="flex justify-center h-6 gap-4 md:justify-start">
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
      </div>
    </footer>
  );
};
export default Footer;
