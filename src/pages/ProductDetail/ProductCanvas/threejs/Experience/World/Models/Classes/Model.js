import * as THREE from 'three';
import Rotation, { ROTATION_TYPES } from '../../../Utils/Rotation';
import Time from '../../../Utils/Time';
import MODELS from '../../../Constants/modelAttributes';

export default class Model {
  constructor(modelName) {
    this.time = new Time();
    this.name = modelName;
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
}
