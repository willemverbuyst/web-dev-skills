import React from 'react';
import { Html } from '@react-three/drei';
import reduxL from '../img/redux.png';

export default function ReduxLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <Html>
        <img src={reduxL} alt="redux" />
      </Html>
    </mesh>
  );
}
