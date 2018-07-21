import styled from 'react-emotion';

export default styled.a`
  background: white !important;
  border-radius: 2px;
  color: #333333 !important;
  text-shadow: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  margin: 1rem 0;
  display: inline-block;
  line-height: 16px;
  padding: 12px 16px;
  text-decoration: none;
  transition: color 125ms ease-in, box-shadow 125ms ease-in;

  &:hover {
    color: #2171cc !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:active {
    color: #333333 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;
