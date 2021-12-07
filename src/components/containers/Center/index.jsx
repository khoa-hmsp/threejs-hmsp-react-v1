import styled from 'styled-components';
import { OverlayWebGL } from '..';

const Center = styled(OverlayWebGL)`
  position: absolute;
  bottom: 0;
  left: 50%;
  margin: 5px 0 5px 0;

  transform: translateX(-50%);
`;

export default Center;
