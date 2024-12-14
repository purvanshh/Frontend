import React from 'react';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <main className="h-screen w-screen">
      <Spline
        scene="https://prod.spline.design/Aaw-JiPUJgQEBfcR/scene.splinecode"
        className="w-full h-full"
      />
    </main>
  );
}

export default App;