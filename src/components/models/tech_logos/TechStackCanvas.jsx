import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense, useState } from 'react';
import TechModel from './TechModel';

const TechStackCanvas = ({ models }) => {
    // Calculate grid positions for 5 models (2 rows)
    const positions = [
        [-3, 1, 0], // Row 1: React
        [-1.5, 1, 0], // Row 1: Python
        [0, 1, 0], // Row 1: Node (center)
        [1.5, 1, 0], // Row 1: Three.js
        [3, 1, 0] // Row 1: Git
    ];

    return (
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={1.5} />

            {/* Single shared environment for all models */}
            <Environment preset='city' />

            <Suspense fallback={null}>
                {models.map((model, index) => (
                    <TechModel key={model.name} model={model} position={positions[index]} />
                ))}
            </Suspense>

            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    );
};

export default TechStackCanvas;
