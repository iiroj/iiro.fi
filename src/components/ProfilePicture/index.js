import React from "react";
import styled from "styled-components";

import { default as profilePicture1x } from "./profilePicture.jpg";
import { default as profilePicture2x } from "./profilePicture@2x.jpg";
import { default as profilePicture3x } from "./profilePicture@3x.jpg";

export const ProfilePicture = () => {
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

  return (
    <Container>
      <Picture
        alt="Picture of Iiro Jäppinen"
        src={profilePicture1x}
        srcSet={`${profilePicture1x} 1x, ${profilePicture2x} 2x, ${profilePicture3x} 3x`}
      />
    </Container>
  );
};
