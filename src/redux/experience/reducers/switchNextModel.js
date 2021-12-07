import Experience from '../../../pages/ProductDetail/ProductCanvas/threejs/Experience/Experience';
import { modelNames, TIME_TO_SWITCH_MODEL } from '../constants/models';

const switchNextModel = (state) => {
  const quantity = modelNames.length;
  const idx = modelNames.findIndex(
    (modelName) => modelName === state.currentModelName
  );
  const experience = new Experience();

  if (idx !== quantity - 1) {
    state.isSwitchModel = true;
    state.currentModelName = modelNames[idx + 1];
    experience.switchModel(state.currentModelName, TIME_TO_SWITCH_MODEL);
  }
};

export default switchNextModel;
