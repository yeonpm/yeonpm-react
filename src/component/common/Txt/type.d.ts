import { HtmlHTMLAttributes, HTMLDivElement } from "react";
import { DefaultConfigType } from "react-style-props";

export interface TxtProps
  extends DefaultConfigType,
    HtmlHTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  span?: boolean;
}
