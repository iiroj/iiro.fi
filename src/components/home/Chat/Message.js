import styled, { keyframes } from 'react-emotion';

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateY(25%);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

export default styled.div`
  animation: ${animation} 125ms ease-in-out forwards;
  background-color: rgb(242, 242, 242);
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  transition: all 125ms;

  & + & {
    margin-top: 0.5rem;
  }

  &:last-of-type {
    border-bottom-left-radius: 0;
  }
`;
