import styled from "styled-components";
export const AppWrapper = styled("div")`
  form {
    display: flex;
    flex-direction: column;
    width: 400px;
    min-width: 100px;
    min-height: 400px;
    padding: 20px 40px 40px 40px;
    border-radius: 6px;
    box-shadow: 0px 8px 36px #222;
    background-color: #fefefe;
  }
  form > h1 {
    display: flex;
    justify-content: center;
    font-family: "Segoe UI", "Ubuntu", "Roboto", "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 2em;
    font-weight: lighter;
    margin-top: 0.25em;
    color: #222;
    letter-spacing: 2px;
  }
  .info {
    padding-bottom: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  .error {
    color: #db2269;
    font-size: 0.5em;
    display: relative;
  }
`;
