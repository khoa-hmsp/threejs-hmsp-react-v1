import React from 'react';
import Button from './components/Button';
import { Container } from './components/containers';
import Left from './components/containers/Left';
import Right from './components/containers/Right';

export default function App() {
  return (
    <div>
      <Container>
        <Left>
          <Button>Previous</Button>
        </Left>
        <Right>
          <Button>Next</Button>
        </Right>
      </Container>
    </div>
  );
}
