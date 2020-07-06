import React from 'react';
import { HTML } from 'drei';
import gitL from '../img/git.png';

export default function GitLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <HTML scaleFactor={2.5}>
        <img src={gitL} alt="git" />
        <h2 style={{ fontSize: '3rem' }}>Git</h2>
      </HTML>
    </mesh>
  );
}
