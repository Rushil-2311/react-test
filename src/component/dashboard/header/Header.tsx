import React from "react";
import styled from "styled-components";

const HeaderMainDiv = styled("div")`
  background-color: #4a4e69;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  min-height: 56px;
`;
const Logout = styled("button")`
  border-radius: 5px;
  font-weight: bold;
  padding: 14px 33px;
  background-color: white;
  border: none;
  cursor: pointer;
  color: rgb(45, 71, 100);
  :hover {
    text-decoration: none;
    background-color: #e1dbdb;
  }
`;

const Header = () => {
  return (
    <HeaderMainDiv>
      <Logout>Logout</Logout>
    </HeaderMainDiv>
  );
};

export default Header;
