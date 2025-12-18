"use client"

import React, { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Workaround for missing intrinsic elements types in some environments
const Mesh = 'mesh' as any;
const PlaneGeometry = 'planeGeometry' as any;
const ShaderMaterial = 'shaderMaterial' as any;
const RingGeometry = 'ringGeometry' as any;
const MeshBasicMaterial = 'meshBasicMaterial' as any;

// Custom shader material for advanced effects
const vertexShader = `
  uniform float time;
  uniform float intensity;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    
    vec3 pos = position;
    // Enhanced wave motion
    pos.z += sin(pos.x * 2.0 + time) * 0.2 * intensity;
    pos.y += sin(pos.x * 2.0 + time * 0.5) * 0.1 * intensity;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = `
  uniform float time;
  uniform float intensity;
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vec2 uv = vUv;
    
    // Create organic flowing noise pattern
    float noise = sin(uv.x * 10.0 + time * 0.5) * cos(uv.y * 10.0 + time * 0.3);
    noise += sin(uv.x * 20.0 - time * 0.2) * cos(uv.y * 15.0 + time * 0.4) * 0.5;
    
    // Smooth blending
    float blend = noise * 0.5 + 0.5;
    
    // Mix colors with increased vibrancy
    vec3 color = mix(color1, color2, blend);
    
    // Add dynamic highlights
    float highlight = pow(blend, 4.0) * 0.5;
    color += vec3(highlight);
    
    // Soft vignette/glow from center
    float d = length(uv - 0.5);
    float glow = 1.0 - smoothstep(0.0, 0.8, d);
    
    gl_FragColor = vec4(color, glow * 0.9);
  }
`

export function ShaderPlane({
  position,
  color1 = "#ff5722",
  color2 = "#ffffff",
}: {
  position: [number, number, number]
  color1?: string
  color2?: string
}) {
  const mesh = useRef<THREE.Mesh>(null)

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      intensity: { value: 1.0 },
      color1: { value: new THREE.Color(color1) },
      color2: { value: new THREE.Color(color2) },
    }),
    [color1, color2],
  )

  useFrame((state) => {
    if (mesh.current) {
      // Slow down the time for a more majestic feel
      uniforms.time.value = state.clock.elapsedTime * 0.5
      uniforms.intensity.value = 1.0 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  // Increased size to [10, 10] to ensure it fills the background
  return (
    <Mesh ref={mesh} position={position} rotation={[-0.2, 0, 0]}>
      <PlaneGeometry args={[10, 10, 128, 128]} />
      <ShaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        side={THREE.DoubleSide}
      />
    </Mesh>
  )
}

export function EnergyRing({
  radius = 1,
  position = [0, 0, 0],
}: {
  radius?: number
  position?: [number, number, number]
}) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.z = state.clock.elapsedTime
      const material = mesh.current.material as THREE.MeshBasicMaterial
      if (material) {
        material.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 3) * 0.3
      }
    }
  })

  return (
    <Mesh ref={mesh} position={position}>
      <RingGeometry args={[radius * 0.8, radius, 32]} />
      <MeshBasicMaterial color="#ff5722" transparent opacity={0.6} side={THREE.DoubleSide} />
    </Mesh>
  )
}