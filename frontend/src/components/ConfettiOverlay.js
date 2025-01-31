import Confetti from 'react-confetti';
import { useState, useEffect } from 'react';

export default function ConfettiOverlay() {
  const [dimensions, setDimensions] = useState({ 
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Confetti
      width={dimensions.width}
      height={dimensions.height}
      numberOfPieces={300}
      recycle={false}
      gravity={0.15}
      style={{ position: 'fixed', top: 0 }}
    />
  );
}