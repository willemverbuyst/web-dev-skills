import * as THREE from 'three';
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { OrbitControls, Box, Text } from '@react-three/drei';
import AngularLogo from './components/AngularLogo';
import AntDesignLogo from './components/AntDesignLogo';
import ChartLogo from './components/ChartLogo';
import CssLogo from './components/CssLogo';
import GitLogo from './components/GitLogo';
import HtmlLogo from './components/HtmlLogo';
import JestLogo from './components/JestLogo';
import JsLogo from './components/JsLogo';
import MaterialUILogo from './components/MaterialUILogo';
import NodeLogo from './components/NodeLogo';
import ParcelLogo from './components/ParcelLogo';
import PostgresqlLogo from './components/PostgresqlLogo';
import ReactBootstrapLogo from './components/ReactBootstrapLogo';
import ReactLogo from './components/ReactLogo';
import ReduxLogo from './components/ReduxLogo';
import SassLogo from './components/SassLogo';
import SequelizeLogo from './components/SequelizeLogo';
import SqlLogo from './components/SqlLogo';
import StyledComponentsLogo from './components/StyledComponentsLogo';
import SvelteLogo from './components/SvelteLogo';
import TsLogo from './components/TsLogo';
import img from './img/dashboard-3.png';

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
      <AngularLogo position={[1, 3, -3]} />
      <AntDesignLogo position={[-2.1, -3, 3]} />
      <ChartLogo position={[2, 1.7, -0.5]} />
      <CssLogo position={[-1.3, 0.2, -2]} />
      <GitLogo position={[-1.6, -1.8, 1]} />
      <HtmlLogo position={[1.5, 0, -2]} />
      <JestLogo position={[-1.5, -2, -2]} />
      <JsLogo position={[0.5, 0.5, 0.5]} />
      <MaterialUILogo position={[-3, -1.5, 1]} />
      <NodeLogo position={[0, -1.5, 0]} />
      <ParcelLogo position={[-3.5, -1.4, -1]} />
      <PostgresqlLogo position={[-0.5, 1.4, -3]} />
      <ReactBootstrapLogo position={[-2, 2, -2]} />
      <ReactLogo position={[-2.2, -3, 1]} />
      <ReduxLogo position={[2, 0, 0]} />
      <SassLogo position={[0, 2, 0]} />
      <SequelizeLogo position={[2, -1.8, -2]} />
      <SqlLogo position={[2, -2, 0.4]} />
      <StyledComponentsLogo position={[-3, 1.5, -1]} />
      <SvelteLogo position={[-2, -2, -3]} />
      <TsLogo position={[3, 0.5, 0.5]} />
    </group>
  );
}

function Project(meshProps) {
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <mesh>
      <Box
        position={[-4, 2, 1]}
        args={[1, 1, 1]} // Width, Height and Depth of the box
        {...meshProps} // All THREE.Mesh props are valid
      >
        <meshBasicMaterial attach="material" map={texture} />
      </Box>
    </mesh>
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
        <Suspense fallback={null}>
          <Project />
        </Suspense>
        {/* <Text position={[-5, 3.5, 0]} fontSize="0.5">
          Hi I'm Willem!
        </Text> */}
      </Canvas>
    </>
  );
}
