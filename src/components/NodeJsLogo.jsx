import React from 'react';
import { HTML } from 'drei';
import nodeL from '../img/node-js.png';

export default function NodeJsLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <HTML scaleFactor={2.5}>
        <img src={nodeL} alt="node-js" />
        <h2 style={{ fontSize: '3rem' }}>Node-js</h2>
      </HTML>
    </mesh>
  );
}
