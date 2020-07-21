import React from 'react';
import { HTML } from 'drei';
import SqlL from '../img/sql.png';

export default function SqlLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <HTML scaleFactor={2.5}>
        <img src={SqlL} alt="sql" />
        <h2 style={{ fontSize: '3rem' }}>sql</h2>
      </HTML>
    </mesh>
  );
}
