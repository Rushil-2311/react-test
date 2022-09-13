import Header from "../../component/dashboard/header/Header";
import styled from "styled-components";
import DataTable from "../../component/dashboard/dataTable/DataTable";

const DashBoardWrapper = styled("div")`
  width: 100vw;
  background-color: #ffffff;
  height: 100vh;
`;
const Dashboard = () => {
  return (
    <DashBoardWrapper>
      <Header />
      <DataTable />
    </DashBoardWrapper>
  );
};

export default Dashboard;
