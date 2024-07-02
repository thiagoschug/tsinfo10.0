import * as React from 'react';
import { LinearProgress } from '@mui/material';

function ScrollProgressBar() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const updateProgressBar = () => {
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const newProgress = (currentScroll / totalScrollHeight) * 100;

      setProgress(newProgress);
    };

    window.addEventListener('scroll', updateProgressBar);
    return () => window.removeEventListener('scroll', updateProgressBar);
  }, []);

  return (
    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100000 }} // Estilização para fixar no topo
    />
  );
}

export default ScrollProgressBar;
