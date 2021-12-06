import React from 'react';
import Button from './components/Button';

export default function App() {
  return (
    <div>
      <Button onClick={() => console.log('he')}>Hello world</Button>
    </div>
  );
}
