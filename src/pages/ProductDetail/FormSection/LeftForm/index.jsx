import React from 'react';
import { Title } from '../../../../components/Typography';

export default function LeftForm() {
  return (
    <form>
      <Title variant="h1" color="white">
        Form Left
      </Title>
      <input type="text" placeholder="Text input" />
      <button type="submit">Submit</button>
    </form>
  );
}
