import React from 'react'

import { ProfilePicture } from 'components/ProfilePicture'

import {
  Section,
  Container,
  Name,
  Title,
  Amp,
  FraktioLink,
  FraktioLogo,
  FraktioText
} from './styled'

export const Header = () => (
  <Section>
    <Container>
      <ProfilePicture />
      <Name>Iiro Jäppinen</Name>
      <Title>
        UX <Amp>&</Amp> UI Designer at <FraktioLink href='https://fraktio.fi' target='_blank'><FraktioLogo /><FraktioText>fraktio</FraktioText></FraktioLink>
      </Title>
    </Container>
  </Section>
)
