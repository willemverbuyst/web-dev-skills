import React, { useRef} from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import AngularLogo from '../LogoComponents/AngularLogo';
import AntDesignLogo from '../LogoComponents/AntDesignLogo';
import ChartLogo from '../LogoComponents/ChartLogo';
import CssLogo from '../LogoComponents/CssLogo';
import GitLogo from '../LogoComponents/GitLogo';
import HtmlLogo from '../LogoComponents/HtmlLogo';
import JestLogo from '../LogoComponents/JestLogo';
import JsLogo from '../LogoComponents/JsLogo';
import MaterialUILogo from '../LogoComponents/MaterialUILogo';
import NodeLogo from '../LogoComponents/NodeLogo';
import ParcelLogo from '../LogoComponents/ParcelLogo';
import PostgresqlLogo from '../LogoComponents/PostgresqlLogo';
import ReactBootstrapLogo from '../LogoComponents/ReactBootstrapLogo';
import ReactLogo from '../LogoComponents/ReactLogo';
import ReduxLogo from '../LogoComponents/ReduxLogo';
import SassLogo from '../LogoComponents/SassLogo';
import SequelizeLogo from '../LogoComponents/SequelizeLogo';
import SqlLogo from '../LogoComponents/SqlLogo';
import StyledComponentsLogo from '../LogoComponents/StyledComponentsLogo';
import SvelteLogo from '../LogoComponents/SvelteLogo';
import TsLogo from '../LogoComponents/TsLogo';

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

export default function Skills() {
  return (
    <div className="canvas-container">
      <Canvas style={{ height: '100vh' }}>
      <ambientLight />
      <OrbitControls />
      <Group />
      </Canvas>
    </div>
  );
}