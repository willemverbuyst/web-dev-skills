import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import ChartLogo from './components/ChartLogo';
import CssLogo from './components/CssLogo';
import GitLogo from './components/GitLogo';
import HtmlLogo from './components/HtmlLogo';
import JestLogo from './components/JestLogo';
import JsLogo from './components/JsLogo';
import NodeLogo from './components/NodeLogo';
import ParcelLogo from './components/ParcelLogo';
import ReactBootstrapLogo from './components/ReactBootstrapLogo';
import ReactLogo from './components/ReactLogo';
import ReduxLogo from './components/ReduxLogo';
import SassLogo from './components/SassLogo';
import SequelizeLogo from './components/SequelizeLogo';
import SqlLogo from './components/SqlLogo';
import StyledComponentsLogo from './components/StyledComponentsLogo';
import TsLogo from './components/TsLogo';

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
      <ChartLogo position={[2, 1.7, -0.5]} />
      <CssLogo position={[-1.3, 0.2, -2]} />
      <GitLogo position={[-1.6, -1.8, 1]} />
      <HtmlLogo position={[1.5, 0, -2]} />
      <JestLogo position={[-1.5, -2, -2]} />
      <JsLogo position={[0.5, 0.5, 0.5]} />
      <NodeLogo position={[0, -1.5, 0]} />
      <ParcelLogo position={[-3.5, -1.4, -1]} />
      <ReactBootstrapLogo position={[-2, 2, -2]} />
      <ReactLogo position={[-2.2, 0, 0]} />
      <ReduxLogo position={[2, 0, 0]} />
      <SassLogo position={[0, 2, 0]} />
      <SequelizeLogo position={[2, -1.8, -2]} />
      <SqlLogo position={[2, -2, 0.4]} />
      <StyledComponentsLogo position={[-3, 1.5, -1]} />
      <TsLogo position={[3, 0.5, 0.5]} />
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
        <OrbitControls />
      </Canvas>
    </>
  );
}
