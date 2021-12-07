import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../components/Button';
import { Container } from '../../../components/containers';
import Center from '../../../components/containers/Center';

export default function EnterButton() {
  const isSwitchingModel = useSelector(
    (state) => state.experience.isSwitchModel
  );
  const isLoadingExperience = useSelector(
    (state) => state.experience.isLoading
  );

  return (
    <Container>
      <Center>
        <Button visible={!isSwitchingModel && !isLoadingExperience}>
          Enter/Exit
        </Button>
      </Center>
    </Container>
  );
}
