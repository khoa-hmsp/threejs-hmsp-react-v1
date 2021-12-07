import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../components/Button';
import { Container } from '../../../components/containers';
import Center from '../../../components/containers/Center';

export default function EnterButton() {
  const isSwitchingModel = useSelector(
    (state) => state.experience.isSwitchModel
  );

  return (
    <Container>
      <Center>
        <Button visible={!isSwitchingModel}>Enter/Exit</Button>
      </Center>
    </Container>
  );
}
