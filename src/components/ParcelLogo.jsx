import React from 'react';
import { Html } from '@react-three/drei';
import parcelL from '../img/parcel.png';

export default function ParcelLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <Html>
        <img src={parcelL} alt="parcel" />
      </Html>
    </mesh>
  );
}
