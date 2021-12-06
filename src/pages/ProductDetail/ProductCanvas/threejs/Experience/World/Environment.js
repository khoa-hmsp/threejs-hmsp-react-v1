import * as THREE from 'three';
import Experience from '../Experience.js';
import Dust from './Geometries/Dust/index.js';
import { findMaxDistance } from '../Constants/modelAttributes';

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Setup
    this.setSunLight();
    // this.setEnvironmentMap();
    this.setFog();
    this.setDusts();
    // this.setCoordinatesHelpers();
  }

  setSunLight() {
    this.sunLight = new THREE.DirectionalLight('#ffffff', 5);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 15;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(3, 3, -2.25);
    this.scene.add(this.sunLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    this.scene.add(ambientLight);
  }

  setEnvironmentMap() {
    this.environmentMap = {
      intensity: 0,
      texture: null,
      updateMaterials: () => {
        this.scene.traverse((child) => {
          if (
            child instanceof THREE.Mesh &&
            child.material instanceof THREE.MeshStandardMaterial
          ) {
            child.material.envMap = this.environmentMap.texture;
            child.material.envMapIntensity = this.environmentMap.intensity;
            child.material.needsUpdate = true;
          }
        });
      },
    };
    this.environmentMap.intensity = 0.6;
    this.environmentMap.texture = this.resources.items.environmentMapTexture;
    this.environmentMap.texture.encoding = THREE.sRGBEncoding;

    this.scene.environment = this.environmentMap.texture;
    this.scene.environment = this.environmentMap.texture;
    this.scene.background = this.environmentMap.texture;

    this.environmentMap.updateMaterials();
  }

  setCoordinatesHelpers() {
    const gridHelper = new THREE.GridHelper(500, 100);
    gridHelper.position.y -= 0.5;
    const axesHelper = new THREE.AxesHelper(200);
    this.experience.scene.add(gridHelper);
  }

  setFog() {
    this.fog = new THREE.Fog('#262837', 1, 15);
    this.scene.fog = this.fog;
  }

  setDusts() {
    this.dusts = new Dust(500, 1000);
  }
}
