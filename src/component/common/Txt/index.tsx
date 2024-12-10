"use client";

import { ReactElement, Ref, forwardRef, memo } from "react";
import styled from "@emotion/styled";
import { resolveProps } from "react-style-props";
import { TxtProps } from "./type";

const Txt = forwardRef(
  (
    { span, children, ...props }: TxtProps,
    ref?: Ref<HTMLDivElement>
  ): ReactElement => {
    const { styleString, otherProps } = resolveProps(props as any);
    const StyledTxt = span ? StyledTxtSpan : StyledTxtP;

    return (
      <StyledTxt
        ref={ref}
        css={styleString}
        {...otherProps}
        className={`yeonpm-txt${
          otherProps.className ? ` ${otherProps.className}` : ""
        }`}
      >
        {children}
      </StyledTxt>
    );
  }
);

export default memo(Txt);

const StyledTxtP = styled("p")<{ css?: string }>`
  ${({ css }) => css}
`;

const StyledTxtSpan = styled("span")<{ css?: string }>`
  ${({ css }) => css}
`;
