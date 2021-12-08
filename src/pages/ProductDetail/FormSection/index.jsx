import React from 'react';
import { Container } from '../../../components/containers';
import Left from '../../../components/containers/Left';
import Right from '../../../components/containers/Right';
import LeftForm from './LeftForm';
import RightForm from './RightForm';

export default function FormSection() {
  return (
    <Container>
      <Left alignItems="flex-start">
        <LeftForm />
      </Left>
      <Right alignItems="flex-start">
        <RightForm />
      </Right>
    </Container>
  );
}
