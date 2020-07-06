import React from 'react';
import { HTML } from 'drei';
import reduxL from '../img/redux.png';

export default function ReduxLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <HTML scaleFactor={2.5}>
        <img src={reduxL} alt="redux" />
        <h2 style={{ fontSize: '3rem' }}>Redux</h2>
      </HTML>
    </mesh>
  );
}
