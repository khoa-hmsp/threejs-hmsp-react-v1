import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/Button';
import { Container } from '../../../components/containers';
import Center from '../../../components/containers/Center';
import { toggleEnterModel } from '../../../redux/experience/slice';

export default function EnterButton() {
  const dispatch = useDispatch();
  const isSwitchingModel = useSelector(
    (state) => state.experience.isSwitchModel
  );
  const isLoadingExperience = useSelector(
    (state) => state.experience.isLoading
  );
  const isEnteringModel = useSelector((state) => state.experience.isEnterModel);

  const handleEnterExitModel = () => {
    dispatch(toggleEnterModel(!isEnteringModel));
  };

  return (
    <Container>
      <Center>
        <Button
          visible={!isSwitchingModel && !isLoadingExperience}
          onClick={handleEnterExitModel}
        >
          {isEnteringModel ? 'Exit' : 'Enter'}
        </Button>
      </Center>
    </Container>
  );
}
