import styled from 'react-emotion';
import posed from 'react-pose';

const Posed = posed.div({
  enter: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: 25
  }
});

export default styled(Posed)`
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
