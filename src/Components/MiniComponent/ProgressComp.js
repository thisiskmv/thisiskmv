import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate({color}) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1);

    return () => {
      clearInterval(timer);
    };
  }, [color]);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress color='inherit' sx={{color:color,borderRadius:"3px"}} variant="determinate" value={progress} />
    </Box>
  );
}