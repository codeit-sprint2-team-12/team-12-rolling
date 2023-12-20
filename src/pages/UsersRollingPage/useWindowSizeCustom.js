import { useEffect, useState } from 'react';

const useWindowSizeCustom = () => {
  const [windowSize, setWindowSize] = useState({width: window.innerWidth
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,

        });
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    } else {
      return () =>
        window.removeEventListener('resize', handleResize)

        }
    }
  }, []);
  return windowSize;
};

export default useWindowSizeCustom;
