import React from 'react';
import EnterButton from './EnterButton';
import LeftRight from './LeftRight';
import LoadingContent from './LoadingContent';
import ProductCanvas from './ProductCanvas';

export default function ProductDetail() {
  return (
    <div>
      <ProductCanvas />
      <LeftRight />
      <LoadingContent />
      <EnterButton />
    </div>
  );
}
