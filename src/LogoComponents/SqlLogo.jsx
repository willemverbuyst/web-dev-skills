import React from 'react';
import { Html} from '@react-three/drei';
import sqlImg from '../img/sql.png';

export default function SqlLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={sqlImg} alt="css"/>
          <span class="tooltiptext">SQL</span>
        </div>
      </Html>
    </mesh>
  );
}