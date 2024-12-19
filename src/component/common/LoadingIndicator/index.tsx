"use client";
import { ReactElement } from "react";
import { LoadingIndicatorProps } from "./type";
import Wrapper from "../Wrapper";

const LoadingIndicator = ({
  ...props
}: LoadingIndicatorProps): ReactElement => {
  return (
    <Wrapper
      className="loading-indicator-wrapper"
      size={props.size || 24}
      {...props}
    >
      <Wrapper
        className="loading-indicator-wrapper-spinner"
        size={props.size || 24}
        css={`
          border: 3px solid #f3f3f3;
          border-top: 3px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      />
    </Wrapper>
  );
};

export default LoadingIndicator;