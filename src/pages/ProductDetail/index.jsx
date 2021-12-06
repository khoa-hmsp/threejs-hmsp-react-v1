import React from 'react';
import EnterButton from './EnterButton';
import LeftRight from './LeftRight';
import LoadingContent from './LoadingContent';

export default function ProductDetail() {
  return (
    <div>
      <LeftRight />
      <LoadingContent />
      <EnterButton />
    </div>
  );
}
