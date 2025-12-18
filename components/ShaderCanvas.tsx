import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ShaderPlane } from './ui/background-paper-shaders';

export const ShaderCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas 
        camera={{ position: [0, 0, 1.2], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ShaderPlane 
            position={[0, 0, 0]} 
            color1="#4c1d95" /* Deep Purple */
            color2="#2563eb" /* Royal Blue */
          />
        </Suspense>
      </Canvas>
      {/* Reduced overlay opacity to let the shader shine through, fading to black at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030303] opacity-90 pointer-events-none"></div>
    </div>
  );
};