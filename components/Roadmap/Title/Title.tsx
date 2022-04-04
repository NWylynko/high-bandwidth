import { PropsWithChildren } from "react";
import styled from "styled-components";

export type TitleProps = PropsWithChildren<{}>;

export const Title = styled.h2<TitleProps>`
  color: ${({ theme }) => theme.colors.primary};
  margin: 32px;
`;
