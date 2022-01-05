import * as THREE from 'three';
import Rotation, { ROTATION_TYPES } from '../../../Utils/Rotation';
import Time from '../../../Utils/Time';
import MODELS from '../../../Constants/modelAttributes';
import Experience from '../../../Experience';

export default class Model {
  constructor(modelName) {
    this.time = new Time();
    this.name = modelName;
    this.scaleFactors = new THREE.Vector3(1, 1, 1);

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
    // Update scale factor
    this.scaleFactors.set(scaleFactor.x, scaleFactor.y, scaleFactor.z);

    // test
    const meshList = this.getMeshList();
    meshList.forEach((mesh) => {
      this.maintainMeshAspectRatio(mesh);
    });
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

  getMeshList() {
    const meshList = [];

    this.model.traverse((o) => {
      if (
        o instanceof THREE.Mesh &&
        o.material instanceof THREE.MeshStandardMaterial
      ) {
        meshList.push(o);
      }
    });

    return meshList;
  }

  maintainMeshAspectRatio(mesh) {
    const meshScale = { x: 1, y: 1 };

    if (
      mesh.name.toUpperCase() === 'LEFT' ||
      mesh.name.toUpperCase() === 'RIGHT'
    ) {
      meshScale.x = this.scaleFactors.y;
      meshScale.y = this.scaleFactors.x;
    } else if (
      mesh.name.toUpperCase() === 'FRONT' ||
      mesh.name.toUpperCase() === 'BACK'
    ) {
      meshScale.x = this.scaleFactors.y;
      meshScale.y = this.scaleFactors.z;
    } else if (
      mesh.name.toUpperCase() === 'TOP' ||
      mesh.name.toUpperCase() === 'BOTTOM'
    ) {
      meshScale.x = this.scaleFactors.x;
      meshScale.y = this.scaleFactors.z;
    }
    mesh.material.map.repeat.set(1 / meshScale.x, 1 / meshScale.y);
  }
}
