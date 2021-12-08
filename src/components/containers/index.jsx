import styled from 'styled-components';
import Left from './Left';
import Right from './Right';
import Center from './Center';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export { Container, Left, Right, Center };
