import React from 'react';
import { Container } from '../../../components/containers';
import Left from '../../../components/containers/Left';
import Loading from '../../../components/Loading';

export default function LoadingContent() {
  return (
    <div>
      <Container>
        <Left>
          <Loading>50%</Loading>
        </Left>
      </Container>
    </div>
  );
}
