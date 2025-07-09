import React from "react";
import { Wrapper } from "../src/index";

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => (
  <Wrapper css="border: 1px solid #e0e0e0; border-radius: 12px; padding: 32px 24px; margin-bottom: 40px; background: #fff;">
    {children}
  </Wrapper>
);

export default Section;
