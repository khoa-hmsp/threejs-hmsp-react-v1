import * as THREE from 'three';
import Rotation, { ROTATION_TYPES } from '../../../Utils/Rotation';
import Time from '../../../Utils/Time';
import MODELS from '../../../Constants/modelAttributes';
import Experience from '../../../Experience';

export default class Model {
  constructor(modelName) {
    this.time = new Time();
    this.name = modelName;

    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.resource = this.resources.items[this.name];

    this.setModel();
  }

  setModel() {
    this.model = this.resource.scene;
    this.model.position.copy(MODELS[this.name].position);
    this.model.rotation.y += MODELS[this.name].rotation;
    this.model.scale.set(
      MODELS[this.name].scale,
      MODELS[this.name].scale,
      MODELS[this.name].scale
    );
    this.scene.add(this.model);

    this.originalMaterial = [];

    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        this.originalMaterial.push(child.material.clone());
      }
    });
  }

  startSpinning() {
    // if (!this.rotation) {
    //    //composition
    // }
    this.rotation = new Rotation(this.model, ROTATION_TYPES.Y_AXIS);
    this.rotation.start();
  }

  stopSpinning() {
    const me = MODELS[this.name];
    if (this.rotation) this.rotation.stop();
    this.model.rotation.set(0, me.rotation, 0);
  }

  scaleByFactor(scaleFactor) {
    const me = MODELS[this.name];
    this.model.scale.set(
      me.scale * scaleFactor.x,
      me.scale * scaleFactor.y,
      me.scale * scaleFactor.z
    );
    //Bouding Box
    const box = new THREE.Box3().setFromObject(this.model);
    this.model.position.y += -0.5 - box.min.y;
  }

  restoreMaterial() {
    let idx = 0;
    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = this.originalMaterial[idx].clone();
        idx++;
      }
    });
  }
}
