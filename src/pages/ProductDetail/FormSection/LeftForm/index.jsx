import React from 'react';
import { Title } from '../../../../components/Typography';
import { Container, Left } from '../../../../components/containers';

export default function LeftForm() {
  return (
    <form>
      <Container>
        <Left alignItems="flex-start" flexDirection="column">
          <Title variant="h1" color="white">
            Form Left
          </Title>
          <label htmlFor="sizeSelect">
            <Title color="white" variant="h3">
              Size
            </Title>
          </label>
          <select id="sizeSelect" name="size">
            <option value="1x1x1">1x1x1</option>
            <option value="1x2x3">1x2x3</option>
            <option value="2x1x3">2x1x3</option>
          </select>
        </Left>
      </Container>
    </form>
  );
}
