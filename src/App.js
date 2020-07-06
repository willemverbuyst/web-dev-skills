import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, Stars } from 'drei';
import ReactLogo from './components/ReactLogo';
import ChartLogo from './components/ChartLogo';
import JavaScriptLogo from './components/JavaScriptLogo';
import GitLogo from './components/GitLogo';
import ReduxLogo from './components/ReduxLogo';
import HtmlLogo from './components/HtmlLogo';
import CssLogo from './components/CssLogo';

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
      <JavaScriptLogo position={[0, 0, 0]} />
      <ReactLogo position={[-2.2, 0, 0]} />
      <ChartLogo position={[2, 1.7, -0.5]} />
      <GitLogo position={[-1.6, -1.8, 1]} />
      <ReduxLogo position={[2, 0, 0]} />
      <HtmlLogo position={[1.5, 0, -2]} />
      <CssLogo position={[-1.3, 0.2, -2]} />
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
