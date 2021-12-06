import styled from 'styled-components';

const Text = styled.div`
  color: white;
  width: 20%;
  padding: 5px;
  border: 1px solid white;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.609);
  height: fit-content;

  transition: all ease 0.5s;

  opacity: 0;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
`;

export default Text;
