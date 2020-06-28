import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars } from 'drei';

function App() {
  return (
    <>
      <Canvas style={{ height: '100vh' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
