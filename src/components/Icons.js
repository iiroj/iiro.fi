import React from 'react'
import styled from 'styled-components'

const Icon = styled.svg`
  display: inline-block;
  fill-rule: evenodd;
  fill: none;
  height: 24px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
  transition: transform 125ms ease-in;
  vertical-align: -30%;
  viewBox: 0 0 32 32;
  width: 24px;

  * {
      stroke: hsla(0, 0%, 30%, 1);
  }
`

export const IconDribbble = () => (
  <Icon
    height='32'
    viewBox='0 0 32 32'
    width='32'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M15.25 9.008c-2.125-4.062-3.813-5.813-4.813-6.938C7.5 3.196 1 7.508 1 16.008s7.188 15 15 15c4.438 0 6.625-1.688 6.625-1.688s-.313-3.687-2.063-8.5m5.532 6.281c1.31-1.344 3.03-3.125 3.81-5.532' />
    <path d='M5.063 14.352c2.406 0 7.467-.437 12.937-2.53 5.47-2.096 7.594-4.845 8.844-6.158-2.907-3.186-7.75-5.062-12.374-4.593M8.156 23.883c2-2.22 6-6.313 11.063-7.156 5.06-.846 9.592-.033 11.685.75.282-3.158-.28-5.627-1.53-8.283' />
  </Icon>
)

export const IconEmail = (props) => (
  <Icon
    className={props.className}
    height='32'
    viewBox='0 0 32 32'
    width='32'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M1 5h30v22H1V9' />
    <path d='M5 9l11 9 10.996-9' />
  </Icon>
)

export const IconFacebook = (props) => (
  <Icon
    className={props.className}
    height='32'
    viewBox='0 0 32 32'
    width='32'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M6 26s-5-3.997-5-10.997S7 1 16 1s15 7 15 14-7 14-15 14c-3 0-5-.5-5-.5L7 31' />
    <path d='M7 19l7-7 4 6 7-7' />
  </Icon>
)

export const IconLinkedin = (props) => (
  <Icon
    className={props.className}
    height='32'
    viewBox='0 0 32 32'
    width='32'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g transform='translate(1 1)' >
      <path
        d='M3 30h25c1 0 2-1 2-2.052V2c0-1-1-2-2-2H2C1 0 0 1 0 2v25' />
      <path
        d='M14 24V13v4c0-1 2-5 5-5 2 0 4 2 4 5v7' />
      <circle
        cx='8'
        cy='8'
        r='0.25' />
      <path d='M8 13v11' />
    </g>
  </Icon>
)

export const IconGitHub = (props) => (
  <Icon
    className={props.className}
    height='32'
    viewBox='0 0 32 32'
    width='32'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1.5 14S1 15 1 17c0 9 6 12 15 12s15-3 15-12c0-4-3-6.5-3-6.5S29 6 28 3c-3 0-7 4-7 4s-2.5-1-5-1-5 1-5 1-4-4-7-4c-1 3 0 7.5 0 7.5' />
  </Icon>
)

export const IconTelegram = (props) => (
  <Icon
    className={props.className}
    height='32'
    viewBox='0 0 32 32'
    width='32'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='16' cy='16' r='15' />
    <path d='M17 23l4-12-12 4 6 2' />
  </Icon>
)
