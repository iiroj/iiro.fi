import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 3px;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;

  &::after {
    border-radius: 3px;
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.1);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const Picture = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`;

const ProfilePicture = () => (
  <Container>
    <Picture
      alt="Picture of Iiro Jäppinen"
      src="/profilePicture.jpg"
      srcSet="/profilePicture.jpg 1x, /profilePicture@2x.jpg 2x, /profilePicture@3x.jpg 3x"
    />
  </Container>
);

export default ProfilePicture;
