import { modelNames } from '../../pages/ProductDetail/ProductCanvas/threejs/Experience/Constants/modelAttributes';

const INITIAL_STATE = {
  currentModelName: modelNames[0],
  isEnterModel: false,
  isSwitchModel: false,
  isLoading: true,
};

export default INITIAL_STATE;
