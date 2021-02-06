import React from 'react';
import { Html} from '@react-three/drei';
import tsImg from '../img/typescript.png';

export default function TsLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={tsImg} alt="css"/>
          <span class="tooltiptext">TypeScript</span>
        </div>
      </Html>
    </mesh>
  );
}