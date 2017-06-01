import React from 'react'
import styled from 'styled-components';

import { ProfilePicture } from 'components/ProfilePicture'
import { Amp } from 'components/Amp'
import { FraktioLink } from 'components/FraktioLink'

export const Header = () => {
  const Section = styled.section`
    background-color: hsla(0, 0%, 100%, 1);
  `
  const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;
    margin: 0 auto;
    max-width: 30rem;
    padding: 5vh 1rem 0 1rem;
  `
  const PictureContainer = styled.div`
    height: 96px;
    margin-bottom: 1rem;
    width: 96px;
  `
  const Name = styled.h1`
    font-family: Georgia, serif;
    font-size: 1.5rem;
    font-style: italic;
    margin: 0.5rem 0;
  `
  const Title = styled.h2`
    margin: 0;
  `

  return (
    <Section>
      <Container>
        <PictureContainer>
          <ProfilePicture />
        </PictureContainer>
        <Name>Iiro Jäppinen</Name>
        <Title>UX <Amp /> UI Designer at <FraktioLink /></Title>
      </Container>
    </Section>
  )
}
