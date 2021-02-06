import React from 'react';
import { Html} from '@react-three/drei';
import reactBootstrapImg from '../img/react-bootstrap.png';

export default function ReactBootstrapLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={reactBootstrapImg} alt="css"/>
          <span class="tooltiptext">React Bootstrap</span>
        </div>
      </Html>
    </mesh>
  );
}