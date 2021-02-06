import React from 'react';
import { Html} from '@react-three/drei';
import gitImg from '../img/git.png';

export default function GitLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={gitImg} alt="css"/>
          <span class="tooltiptext">Git</span>
        </div>
      </Html>
    </mesh>
  );
}