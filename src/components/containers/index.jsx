import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const OverlayWebGL = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;
`;

export { Container, OverlayWebGL };
