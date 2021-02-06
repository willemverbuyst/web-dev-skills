import React from 'react';
import { Html} from '@react-three/drei';
import svelteImg from '../img/svelte.png';

export default function SvelteLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={svelteImg} alt="css"/>
          <span class="tooltiptext">Svelte</span>
        </div>
      </Html>
    </mesh>
  );
}