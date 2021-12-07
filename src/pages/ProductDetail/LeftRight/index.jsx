import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/Button';
import { Container } from '../../../components/containers';
import Left from '../../../components/containers/Left';
import Right from '../../../components/containers/Right';
import Text from '../../../components/Text';
import {
  switchNextModel as switchNextModelAction,
  switchPreviousModel as switchPreviousModelAction,
  finishSwitchingModel as finishSwitchingModelAction,
} from '../../../redux/experience/slice';
import {
  TIME_TO_SWITCH_MODEL,
  MODELS,
  textPositions,
} from '../ProductCanvas/threejs/Experience/Constants/modelAttributes';

export default function LeftRight() {
  const dispatch = useDispatch();
  const isSwitchingModel = useSelector(
    (state) => state.experience.isSwitchModel
  );
  const currentModelName = useSelector(
    (state) => state.experience.currentModelName
  );

  const handleSwitchNextModel = () => {
    dispatch(switchNextModelAction());
    setTimeout(() => {
      dispatch(finishSwitchingModelAction());
    }, TIME_TO_SWITCH_MODEL * 1000);
  };

  const handleSwitchPreviousModel = () => {
    dispatch(switchPreviousModelAction());
    setTimeout(() => {
      dispatch(finishSwitchingModelAction());
    }, TIME_TO_SWITCH_MODEL * 1000);
  };

  const isTextContentVisible = (position) => {
    return MODELS[currentModelName].text.position === position;
  };

  const renderTextContentVisible = (position) => {
    return MODELS[currentModelName].text.position === position
      ? MODELS[currentModelName].text.content
      : '';
  };

  return (
    <Container>
      <Left>
        <Button visible={!isSwitchingModel} onClick={handleSwitchPreviousModel}>
          Previous
        </Button>
        <Text
          visible={
            !isSwitchingModel && isTextContentVisible(textPositions.left)
          }
        >
          {renderTextContentVisible(textPositions.left)}
        </Text>
      </Left>
      <Right>
        <Text
          visible={
            !isSwitchingModel && isTextContentVisible(textPositions.right)
          }
        >
          {renderTextContentVisible(textPositions.right)}
        </Text>
        <Button visible={!isSwitchingModel} onClick={handleSwitchNextModel}>
          Next
        </Button>
      </Right>
    </Container>
  );
}
