import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect, useMemo } from 'react';
import * as THREE from 'three';

// Single model component that doesn't create its own Canvas
const TechModel = ({ model, position = [0, 0, 0] }) => {
    const scene = useGLTF(model.modelPath);

    // Clone the scene to allow multiple instances
    const clonedScene = useMemo(() => scene.scene.clone(), [scene.scene]);

    useEffect(() => {
        if (model.name === 'Interactive Developer') {
            clonedScene.traverse(child => {
                if (child.isMesh && child.name === 'Object_5') {
                    child.material = new THREE.MeshStandardMaterial({ color: 'white' });
                }
            });
        }
    }, [clonedScene, model.name]);

    return (
        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group position={position} scale={model.scale} rotation={model.rotation}>
                <primitive object={clonedScene} />
            </group>
        </Float>
    );
};

export default TechModel;
