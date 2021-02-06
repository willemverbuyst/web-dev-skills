import React from 'react';
import { Html} from '@react-three/drei';
import reactImg from '../img/react.png';

export default function ReactLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={reactImg} alt="css"/>
          <span class="tooltiptext">React</span>
        </div>
      </Html>
    </mesh>
  );
}