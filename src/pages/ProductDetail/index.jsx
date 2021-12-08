import React from 'react';
import { useSelector } from 'react-redux';
import EnterButton from './EnterButton';
import LeftRight from './LeftRight';
import LoadingContent from './LoadingContent';
import ProductCanvas from './ProductCanvas';

export default function ProductDetail() {
  const experienceRedux = useSelector((state) => state.experience);

  return (
    <div>
      <ProductCanvas />
      {!experienceRedux.isEnterModel ? (
        <>
          <LeftRight />
          <LoadingContent />
        </>
      ) : null}
      <EnterButton />
    </div>
  );
}
