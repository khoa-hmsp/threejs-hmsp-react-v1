import React from 'react';
import Button from './components/Button';
import { Container } from './components/containers';
import Left from './components/containers/Left';
import Right from './components/containers/Right';
import Text from './components/Text';

export default function App() {
  return (
    <div>
      <Container>
        <Left>
          <Button>Previous</Button>
          <Text>
            {' '}
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).{' '}
          </Text>
        </Left>
        <Right>
          <Text>
            {' '}
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).{' '}
          </Text>
          <Button>Next</Button>
        </Right>
      </Container>
    </div>
  );
}
