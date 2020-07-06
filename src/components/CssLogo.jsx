import React from 'react';
import { HTML } from 'drei';
import cssL from '../img/css.png';

export default function GitLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <HTML scaleFactor={2.5}>
        <img src={cssL} alt="css" />
        <h2 style={{ fontSize: '3rem' }}>CSS</h2>
      </HTML>
    </mesh>
  );
}
