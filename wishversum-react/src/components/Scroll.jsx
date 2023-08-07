import { useEffect } from 'react';

function Scroll() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header-container');
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled > 0) {
        header.classList.add('scroll');
      } else {
        header.classList.remove('scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}

export default Scroll;
