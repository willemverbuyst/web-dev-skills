import React from 'react';
import { Html} from '@react-three/drei';
import cssImg from '../img/css.png';

export default function CssLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={cssImg} alt="css"/>
          <span class="tooltiptext">CSS3</span>
        </div>
      </Html>
    </mesh>
  );
}
