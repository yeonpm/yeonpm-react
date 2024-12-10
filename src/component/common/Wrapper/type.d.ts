import { HtmlHTMLAttributes, HTMLDivElement } from "react";
import { DefaultConfigType } from "react-style-props";

export interface WrapperProps
  extends HtmlHTMLAttributes<HTMLDivElement>,
    DefaultConfigType {}
