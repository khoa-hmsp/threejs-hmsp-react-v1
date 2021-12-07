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
import { TIME_TO_SWITCH_MODEL } from '../ProductCanvas/threejs/Experience/Constants/modelAttributes';

export default function LeftRight() {
  const dispatch = useDispatch();
  const isSwitchingModel = useSelector(
    (state) => state.experience.isSwitchModel
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

  return (
    <Container>
      <Left>
        <Button visible={!isSwitchingModel} onClick={handleSwitchPreviousModel}>
          Previous
        </Button>
        <Text visible={!isSwitchingModel}>
          {' '}
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).{' '}
        </Text>
      </Left>
      <Right>
        <Text visible={!isSwitchingModel}>
          {' '}
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).{' '}
        </Text>
        <Button visible={!isSwitchingModel} onClick={handleSwitchNextModel}>
          Next
        </Button>
      </Right>
    </Container>
  );
}
