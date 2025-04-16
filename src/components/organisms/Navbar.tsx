import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';
import CustomButton from '../atoms/CustomButton';
import { GrDocumentDownload } from 'react-icons/gr';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = ['Hero', 'About', 'Projects', 'Interests', 'Contacts'];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList?.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList?.add('floating-nav');
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? '1' : '0',
      duration: 0.2,
    });
  });

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);

    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play();
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying]);

  const handleDownloadCV = async () => {
    try {
      const response = await fetch(
        '/documents/curriculum_christian_litrico.pdf',
      );
      if (!response.ok) {
        throw new Error('Failed to download CV');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'ChristianLitrico-CV.pdf';

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CV:', error);
    }
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-4 md:gap-7">
            <img src="/img/logo.png" alt="logo" className="w-8 md:w-10" />
            <CustomButton
              variant="primary"
              id="product-button"
              title="download cv"
              leftIcon={<GrDocumentDownload />}
              containerClass="bg-blue-50 items-center justify-center md:flex gap-1 px-3 py-3 md:py-4"
              onClick={handleDownloadCV}
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button
                className="flex md:hidden items-center -mr-12 justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <HiX className="h-6 w-6 text-stone-100" />
                ) : (
                  <HiMenu className="h-6 w-6 text-stone-100" />
                )}
              </button>
              <button
                className="flex items-center ml-10 space-x-0.5 py-4"
                onClick={toggleAudioIndicator}
              >
                <audio
                  ref={audioElementRef}
                  className="hidden"
                  src="audio/loop.mp3"
                  loop
                />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={`indicator-line ${isIndicatorActive ? 'active' : ''}`}
                    style={{ animationDelay: `${bar * 0.1}s` }}
                  />
                ))}
              </button>
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 bg-neutral-800 transition-all duration-300 border-t border
           ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        >
          <div className="p-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-stone-100 text-sm uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
