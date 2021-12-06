import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ProductCanvasContainer = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
  z-index: 2;
`;

export default function ProductCanvas() {
  const canvasElement = useRef(null);

  useEffect(() => {
    console.log(
      '🚀 ~ file: index.jsx ~ line 14 ~ ProductCanvas ~ canvasElement',
      canvasElement
    );
  });

  return <ProductCanvasContainer ref={canvasElement} />;
}
