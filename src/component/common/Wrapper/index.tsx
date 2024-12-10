import React, { ReactElement, Ref, forwardRef, memo } from "react";
import styled from "@emotion/styled";
import { resolveProps } from "react-style-props";
import { WrapperProps } from "./type";

const Wrapper = forwardRef(
  (
    { children, ...props }: WrapperProps,
    ref?: Ref<HTMLDivElement>
  ): ReactElement => {
    const { styleString, otherProps } = resolveProps(props as any);

    return (
      <$Wrapper ref={ref} css={styleString} {...otherProps}>
        {children}
      </$Wrapper>
    );
  }
);

export default memo(Wrapper);

const $Wrapper = styled("div")<{ css: string }>`
  ${({ css }) => css}
`;
