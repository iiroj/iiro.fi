import React from 'react'
import styled from 'styled-components';

export const Amp = () => {
  const Ampersand = styled.span`
    font-family: 'Baskerville', 'Goudy Old Style', 'Palatino', 'Book Antiqua', serif;
    font-style: italic;
  `

  return (
    <Ampersand>
      &
    </Ampersand>
  )
}
