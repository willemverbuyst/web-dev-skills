import React from 'react';
import { Html} from '@react-three/drei';
import postgresqlImg from '../img/postgresql.png';

export default function PostgresqlLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={postgresqlImg} alt="css"/>
          <span class="tooltiptext">PostreSQL</span>
        </div>
      </Html>
    </mesh>
  );
}