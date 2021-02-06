import React from 'react';
import { Html} from '@react-three/drei';
import jestImg from '../img/jest.png';

export default function JestLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={jestImg} alt="css"/>
          <span class="tooltiptext">Jest</span>
        </div>
      </Html>
    </mesh>
  );
}