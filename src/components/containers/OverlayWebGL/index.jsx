import styled from 'styled-components';

const OverlayWebGL = styled.div`
  display: flex;
  align-items: ${(props) => {
    if (!props.alignItems || typeof props.alignItems !== 'string') {
      return 'center';
    } else {
      return props.alignItems;
    }
  }};

  flex-direction: ${(props) => props.flexDirection || 'row'};

  z-index: 2;
`;

export default OverlayWebGL;
