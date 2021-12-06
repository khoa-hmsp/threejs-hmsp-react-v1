import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Experience from './threejs/Experience/Experience';

const ProductCanvasContainer = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
  z-index: 2;
`;

export default function ProductCanvas() {
  const canvasElement = useRef(null);
  const [, setExperience] = useState(null);

  useEffect(() => {
    setExperience(new Experience(canvasElement.current));
  }, []);

  return <ProductCanvasContainer ref={canvasElement} />;
}
