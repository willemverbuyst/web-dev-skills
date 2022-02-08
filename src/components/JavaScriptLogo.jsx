import React from 'react';
import { HTML } from 'drei';
import javaScriptL from '../img/js.png';

export default function JavaScriptLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <HTML scaleFactor={2.5}>
        <img src={javaScriptL} alt="javascript" />
        <h2 style={{ fontSize: '3rem' }}>JavaScript</h2>
      </HTML>
    </mesh>
  );
}
