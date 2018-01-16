import React from "react";
import styled from "styled-components";
import Link from "next/link";

const X = styled.a`
  background: none !important;
  color: transparent;
  font-size: 0;
  height: 1.5rem;
  margin: 2.4rem 0 0 1rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  user-select: none;
  width: 1.5rem;
  z-index: 1;

  &::before,
  &::after {
    background-color: rgb(77, 77, 77);
    border-radius: 1px;
    content: "";
    display: block;
    height: 2px;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    width: 100%;
    z-index: -1;
    transition: transform 125ms ease;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    &::before {
      transform: rotate(45deg) scale(1.2);
    }
    &::after {
      transform: rotate(-45deg) scale(1.2);
    }
  }

  &:active {
    &::before {
      transform: rotate(45deg) scale(1);
    }
    &::after {
      transform: rotate(-45deg) scale(1);
    }
  }

  @media print {
    display: none;
  }
`;

const Back = () => (
  <nav>
    <Link href="/">
      <X title="Back to iiro.fi">Back to iiro.fi</X>
    </Link>
  </nav>
);

export default Back;
