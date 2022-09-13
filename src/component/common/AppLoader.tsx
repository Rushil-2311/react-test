import { FunctionComponent } from "react";
import styled from "styled-components";
const AppLoaderWrapper = styled("div")`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface AppProps {
  text: string;
}
const AppLoader: FunctionComponent<AppProps> = ({ text }) => {
  return <AppLoaderWrapper>{text}</AppLoaderWrapper>;
};

export default AppLoader;
