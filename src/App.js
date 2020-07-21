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
import SassLogo from './components/SassLogo';
import NodeJsLogo from './components/NodeJsLogo';
import JestLogo from './components/JestLogo';
import ParcelLogo from './components/ParcelLogo';
import SqlLogo from './components/Sqlogo';
import ReactBootstrapLogo from './components/ReachtBootstrapLogo';

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
      <JavaScriptLogo position={[0.5, 0.5, 0.5]} />
      <ReactLogo position={[-2.2, 0, 0]} />
      <ChartLogo position={[2, 1.7, -0.5]} />
      <GitLogo position={[-1.6, -1.8, 1]} />
      <ReduxLogo position={[2, 0, 0]} />
      <HtmlLogo position={[1.5, 0, -2]} />
      <CssLogo position={[-1.3, 0.2, -2]} />
      <SassLogo position={[0, 2, 0]} />
      <NodeJsLogo position={[0, -1.5, 0]} />
      <JestLogo position={[-1.5, -2, -2]} />
      <ParcelLogo position={[-3.5, -1.4, -1]} />
      <SqlLogo position={[2, -2, 0.4]} />
      <ReactBootstrapLogo position={[-2, 2, -2]} />
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
