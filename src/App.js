import React, { Suspense, useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

function App() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app-container" style={{ height: `${viewportHeight}px` }}>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Spline
          scene="https://prod.spline.design/Aaw-JiPUJgQEBfcR/scene.splinecode"
          className="spline-scene"
          style={{ width: '100%', height: '100%' }}
        />
      </Suspense>
    </div>
  );
}

export default App;