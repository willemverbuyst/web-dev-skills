import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, Stars } from 'drei';
import ReactLogo from './components/ReactLogo';

function Group() {
  const ref = useRef();
  useFrame(
    () => (
      (ref.current.rotation.z += 0.0005),
      (ref.current.rotation.x += 0.005),
      (ref.current.rotation.y += 0.007)
    )
  );
  return (
    <group ref={ref}>
      <ReactLogo position={[-2.2, 0, 0]} />
    </group>
  );
}

export default function App() {
  return (
    <>
      <Canvas style={{ height: '100vh' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Group />
        <Stars />
        <OrbitControls />
      </Canvas>
    </>
  );
}
