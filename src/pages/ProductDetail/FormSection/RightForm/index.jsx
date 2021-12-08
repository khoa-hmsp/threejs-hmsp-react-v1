import React from 'react';
import { Title } from '../../../../components/Typography';

export default function RightForm() {
  return (
    <form>
      <Title variant="h1" color="white">
        Form Right
      </Title>
      <input type="text" placeholder="Text input" />
      <button type="submit">Submit</button>
    </form>
  );
}
