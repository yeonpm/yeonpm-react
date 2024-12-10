"use client";

import { ReactElement, Ref, forwardRef, memo } from "react";
import "./font.css";
import styled from "@emotion/styled";
import { resolveProps } from "react-style-props";
import { TxtProps } from "./type";

const defaultColor = "#2A333C";

const Txt = forwardRef(
  (
    { span, children, ...props }: TxtProps,
    ref?: Ref<HTMLDivElement>
  ): ReactElement => {
    const { styleString, otherProps } = resolveProps(props as any);

    return span ? (
      <StyledTxtSpan
        ref={ref}
        color={defaultColor}
        css={styleString}
        {...otherProps}
      >
        {children}
      </StyledTxtSpan>
    ) : (
      <StyledTxtP
        ref={ref}
        color={defaultColor}
        css={styleString}
        {...otherProps}
      >
        {children}
      </StyledTxtP>
    );
  }
);

export default memo(Txt);

const StyledTxtP = styled("p")<{ css?: string }>`
  margin: 0;
  color: ${defaultColor};
  font-family: Pretendard Variable;
  ${({ css }) => css}
`;

const StyledTxtSpan = styled("span")<{ css?: string }>`
  margin: 0;
  color: ${defaultColor};
  font-family: Pretendard Variable;
  ${({ css }) => css}
`;
