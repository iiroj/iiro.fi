import styled from 'styled-components';

export const Section = styled.section`
  background-color: hsla(0, 0%, 100%, 1);
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  line-height: 1.5rem;
  margin: 0 auto;
  max-width: 30rem;
  padding: 5vh 1rem 0 1rem;
`

export const Name = styled.h1`
  font-family: Georgia, serif;
  font-size: 1.5rem;
  font-style: italic;
  margin: 0.5rem 0;
`

export const Title = styled.h2`
  margin: 0;
`

export const Amp = styled.span`
  font-family: Baskerville, 'Goudy Old Style', Palatino, 'Book Antiqua', serif;
  font-style: italic;
`

export const FraktioLink = styled.a`
  font-family: Georgia, serif;
  font-style: normal;
  font-weight: 500;
  text-decoration: none;
`

import { FraktioLogo as RawFraktioLogo } from 'components/Fraktio'
export const FraktioLogo = styled(RawFraktioLogo)`
  display: inline-block;
  height: 18px;
  margin-right: 2px;
  position: relative;
  viewBox: 0 0 19 18;
  vertical-align: -20%;
  width: 19px;

  path {
      fill: hsla(0, 0%, 30%, 1);
  }
`

export const FraktioText = styled.span`
  font-weight: 700;
`
