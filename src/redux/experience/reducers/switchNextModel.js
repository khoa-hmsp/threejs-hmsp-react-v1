import { modelNames } from '../constants/models';

const switchNextModel = (state) => {
  const quantity = modelNames.length;
  const idx = modelNames.findIndex(
    (modelName) => modelName === state.currentModelName
  );
  if (idx !== quantity - 1) {
    state.isSwitchModel = true;
    state.currentModelName = modelNames[idx + 1];
  }
};

export default switchNextModel;
