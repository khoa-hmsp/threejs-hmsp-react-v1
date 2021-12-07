import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: gold;
  padding: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;

  display: ${(props) => (props.visible ? 'inline-block' : 'none')};
`;

export default Button;
