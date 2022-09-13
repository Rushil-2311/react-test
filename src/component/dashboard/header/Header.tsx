import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <HeaderMainDiv>
      <Logout
        onClick={() => {
          localStorage.removeItem("currentUserId");
          navigate("/signin");
        }}
      >
        Logout
      </Logout>
    </HeaderMainDiv>
  );
};

export default Header;
