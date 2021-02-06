import React from 'react';
import { Html} from '@react-three/drei';
import nodeImg from '../img/node.png';

export default function NodeLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={nodeImg} alt="css"/>
          <span class="tooltiptext">NodeJS</span>
        </div>
      </Html>
    </mesh>
  );
}