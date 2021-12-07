import * as THREE from 'three';

export const textPositions = {
  right: 'right',
  left: 'left',
};

export const MODELS = {
  shiba: {
    position: new THREE.Vector3(-62.5, 2.5, 55),
    camera: {
      position: new THREE.Vector3(-60, 3, 58),
      lookAt: new THREE.Vector3(-60, 1.75, 50),
    },
    scale: 3,
    rotation: Math.PI * 0.2,
    text: {
      position: textPositions.right,
      content: `1. The Mazda RX-7 is a front/mid-engine, rear-wheel-drive, rotary engine-powered sports car that was manufactured and marketed by Mazda from 1978 to 2002 across three generations, all of which made use of a compact, lightweight Wankel rotary engine.`,
    },
  },
  droneModel: {
    position: new THREE.Vector3(0, 0.3, 0.3),
    camera: {
      position: new THREE.Vector3(1, 0.01, 0.95),
      lookAt: new THREE.Vector3(0, 0.05, 0),
    },
    scale: 0.0075,
    rotation: Math.PI * 0.3,
    text: {
      position: textPositions.right,
      content: `2. The Dronebuster® is a compact, light-weight, cost-effective CUAS tool that can defeat COTS drone threats. The system readily converts from an integrated, fixed site jammer into a man-portable jammer for dismounted troops, security teams and first responders to use during fluid, ambiguous, fast-paced encounters.`,
    },
  },
  heliBall: {
    position: new THREE.Vector3(60, 1, -50),
    camera: {
      position: new THREE.Vector3(62.5, 1.25, -52.5),
      lookAt: new THREE.Vector3(60, 1, -45),
    },
    scale: 10,
    rotation: 0,
    text: {
      position: textPositions.left,
      content: `3. This Heli Ball all is easy to operate and fly. It is assembled and ready to lift off! Amazing, exciting and advanced infrared control toy!`,
    },
  },
};

export default MODELS;

export const modelNames = Object.keys(MODELS);
export const TIME_TO_SWITCH_MODEL = 3;
export const TIME_TO_ENTER_MODEL = 0.5;
