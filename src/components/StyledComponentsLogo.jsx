import React from 'react';
import { Html} from '@react-three/drei';
import styledComponentsImg from '../img/styled-components.png';

export default function StyledComponentsLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={styledComponentsImg} alt="css"/>
          <span class="tooltiptext">Styled Components</span>
        </div>
      </Html>
    </mesh>
  );
}