import * as THREE from 'three';
import Experience from '../Experience';
import Environment from './Environment';
import Overlay from './Geometries/Overlay';
import LineFloor from './Geometries/LineFloor';
import BusterDrone from './Models/BusterDrone';
import HeliBall from './Models/HeliBall';
import Shiba from './Models/Shiba';
import OpenBox from './Models/OpenBox';

export default class World {
  constructor() {
    this.doneInitialization = false;

    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.overlay = new Overlay();

    // Wait for resources
    this.resources.on('ready', () => {
      if (!this.doneInitialization) {
        // Setup
        this.lineFloor = new LineFloor(500, 500);
        // this.shiba = new Shiba();
        this.droneModel = new BusterDrone();
        this.heliBall = new HeliBall();
        this.openBox = new OpenBox();
        this.models = [
          // this.shiba,
          this.openBox,
          this.droneModel,
          this.heliBall,
        ];

        // Startup
        this.currentModel = this.models[0];
        this.currentModel.startSpinning();

        this.environment = new Environment();
        // this.viewPointer = new ViewPointer();
        this.overlay.fadeOut();
        this.doneInitialization = true;
      }
    });
  }

  update() {
    if (this.models) this.models.forEach((model) => model.update());
    // if (this.floor) this.floor.update();
    if (this.viewPointer) this.viewPointer.update();
  }

  updateCurrentModel(strModelName) {
    this.models.forEach((model) => {
      if (model.name !== strModelName) {
        model.stopSpinning();
      } else {
        model.startSpinning();
      }
    });
    this.currentModel = this.models.find(
      (model) => model.name === strModelName
    );
  }

  focusCurrentModel() {
    this.currentModel.stopSpinning();
  }

  loseFocusCurrentModel() {
    this.currentModel.startSpinning();
    this.currentModel.scaleByFactor({
      x: 1,
      y: 1,
      z: 1,
    });
    this.currentModel.restoreMaterial();
  }

  scaleModel(strModelName, scaleFactor) {
    this[strModelName].scaleByFactor(scaleFactor);
  }

  applyTexture(strModelName, strTextureName, strMeshName) {
    const object = this[strModelName];
    const texture = this.resources.items[strTextureName];

    object.model.traverse((o) => {
      if (
        o instanceof THREE.Mesh &&
        o.material instanceof THREE.MeshStandardMaterial
      ) {
        if (o.name === strMeshName || typeof strMeshName === 'undefined') {
          o.material.map = texture;
          object.maintainMeshAspectRatio(o);
        }
      }
    });
  }

  getCurrentModelMeshList() {
    return this.currentModel.getMeshList();
  }
}
