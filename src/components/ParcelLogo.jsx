import React from 'react';
import { HTML } from 'drei';
import parcelL from '../img/parcel.png';

export default function ParcelLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <HTML scaleFactor={2.5}>
        <img src={parcelL} alt="parcel" />
        <h2 style={{ fontSize: '3rem' }}>Parcel</h2>
      </HTML>
    </mesh>
  );
}
