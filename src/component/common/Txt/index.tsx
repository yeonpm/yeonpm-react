"use client";

import { ReactElement, Ref, forwardRef, memo } from "react";
import styled from "@emotion/styled";
import { resolveProps } from "react-style-props";
import { TxtProps } from "./type";
import { fontVariants } from "react-style-props";

const Txt = forwardRef(
  (
    { span, children, ...props }: TxtProps,
    ref?: Ref<HTMLDivElement>
  ): ReactElement => {
    // fontVariant boolean props 처리
    const fontVariantProps: Record<string, boolean> = {};
    const otherProps: Record<string, any> = {};

    Object.keys(props).forEach((key) => {
      if (
        key in fontVariants &&
        typeof props[key as keyof typeof props] === "boolean"
      ) {
        fontVariantProps[key] = props[key as keyof typeof props] as boolean;
      } else {
        otherProps[key] = props[key as keyof typeof props];
      }
    });

    // 활성화된 fontVariant 스타일 찾기
    let activeFontVariant: Record<string, any> = {};
    Object.entries(fontVariantProps).forEach(([key, value]) => {
      if (value && key in fontVariants) {
        activeFontVariant = {
          ...activeFontVariant,
          ...fontVariants[key as keyof typeof fontVariants],
        };
      }
    });

    // 스타일 props와 fontVariant 스타일 병합
    const mergedProps = { ...activeFontVariant, ...otherProps };
    const { styleString, otherProps: resolvedOtherProps } = resolveProps(
      mergedProps as any
    );
    const $Txt = span ? $TxtSpan : $TxtP;

    return (
      <$Txt
        ref={ref}
        css={styleString}
        {...resolvedOtherProps}
        className={`yeonpm-txt${
          resolvedOtherProps.className ? ` ${resolvedOtherProps.className}` : ""
        }`}
      >
        {children}
      </$Txt>
    );
  }
);

export default memo(Txt);

const $TxtP = styled("p")<{ css?: string }>`
  ${({ css }) => css}
`;

const $TxtSpan = styled("span")<{ css?: string }>`
  ${({ css }) => css}
`;
