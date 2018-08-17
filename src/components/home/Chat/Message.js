import styled, { keyframes } from 'react-emotion';

const animation = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`;

export default styled.li`
  animation: ${animation} 125ms ease-in-out forwards;
  background-color: hsl(0, 0%, 96%);
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
