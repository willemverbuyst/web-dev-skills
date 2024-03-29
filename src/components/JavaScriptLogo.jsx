import React from 'react';
import { Html } from '@react-three/drei';
import javaScriptL from '../img/js.png';

export default function JavaScriptLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <Html>
        <img src={javaScriptL} alt="javascript" />
      </Html>
    </mesh>
  );
}
