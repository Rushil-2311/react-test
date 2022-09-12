import React, { FunctionComponent } from "react";
import styled from "styled-components";

const ButtonWrapper = styled("button")`
  min-width: 100%;
  cursor: pointer;
  margin-right: 0.25em;
  margin-top: 0.5em;
  padding: 0.938em;
  border: none;
  border-radius: 4px;
  background-color: #22223b;
  color: #fefefe;
  :hover {
    background-color: #4a4e69;
    color: #fefefe;
  }
`;

interface buttonProps {
  buttonName: string;
  onClick?: () => void;
}

export const AppButton: FunctionComponent<buttonProps> = ({
  buttonName,
  onClick,
}) => {
  return (
    <ButtonWrapper
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {buttonName}
    </ButtonWrapper>
  );
};
