import React from "react";
import styled from "styled-components";

import { ProfilePicture } from "components/ProfilePicture";
import { Amp } from "components/Amp";
import { FraktioLink } from "components/FraktioLink";

export const Author = () => {
  const About = styled.aside`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  `;
  const PictureContainer = styled.div`
    height: 48px;
    margin: 0 1rem 1rem 0;
    width: 48px;
  `;
  const Text = styled.div`margin-bottom: 1rem;`;
  const Name = styled.p`
    font-family: Georgia, serif;
    font-size: 1.5rem;
    font-style: italic;
  `;

  return (
    <About>
      <PictureContainer>
        <ProfilePicture />
      </PictureContainer>
      <Text>
        <Name>Iiro Jäppinen</Name>
        <p>
          UX <Amp /> UI Designer at <FraktioLink />
        </p>
      </Text>
    </About>
  );
};
