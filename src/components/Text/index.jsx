import styled from 'styled-components';

const Text = styled.div`
  color: white;
  max-width: 35%;
  padding: 5px;
  margin: 5px;
  border: 1px solid white;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.609);
  max-height: 50%;

  transition: all ease 0.5s;

  opacity: ${(props) => (props.visible ? 1 : 0)};

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
`;

export default Text;
