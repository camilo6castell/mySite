"use client";
import styled from "styled-components";
import { GenericContainer } from "./GenericContainer";

const Wrap = styled(GenericContainer)`
  scroll-snap-align: start;
  padding: 1rem;
  overflow: hidden;
  /* background-color: aliceblue; */
  width: 100dvw;
  height: 100dvh;

  @media (max-width: 900px) {
    padding: 3rem 0.5rem 0.5rem 0.5rem;
    align-items: flex-start;
  }
`;

export default function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return <Wrap id={id}>{children}</Wrap>;
}
