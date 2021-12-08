import styled from 'styled-components';

const StyledTitle = styled.p`
  font-size: ${(props) => {
    if (typeof props?.variant !== 'string') {
      return '1em';
    }

    switch (props.variant) {
      case 'h1':
        return '2em';
      case 'h2':
        return '1.5em';
      case 'h3':
        return '1.17em';
      default:
        return '1em';
    }
  }};

  font-weight: ${(props) => {
    if (typeof props?.variant !== 'string') {
      return 'inherit';
    }

    switch (props.variant) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return 'bolder';
      default:
        return 'inherit';
    }
  }};

  color: ${(props) => props?.color || 'black'};
`;

export default function Title({ variant, color, children }) {
  return (
    <StyledTitle variant={variant} color={color}>
      {children}
    </StyledTitle>
  );
}
