import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { Todos } from "../../../types/interface/dashboard";
import AppLoader from "../../common/AppLoader";
import { DataTableWrapper } from "./dataTable.styles";
import Pagination from "./pagination/Pagination";
import SearchInput from "./searchinput/SearchInput";
import { TableHead } from "./tablehead/TableHead";
import { useNavigate } from "react-router-dom";
import TableRow from "./tablerow/TableRow";
import { useQuery } from "../../../hooks/useQuery";
import { returnFeatchUrl } from "../../../helper/helperMethods";
const DataTable = () => {
  const [filterData, setFilterData] = useState<Array<Todos>>([]);
  const [searchText, setSearchText] = useState<string>("");
  let query = useQuery();
  const navigate = useNavigate();
  const { isLoading, serverError, apiData } = useFetch(returnFeatchUrl(query));
  useEffect(() => {
    setFilterData(apiData);
  }, [apiData, query]);
  useEffect(() => {
    if (query.get("_start") === null || query.get("_limit") === null) {
      return navigate("/dashboard?_start=0&_limit=10");
    }
  });

  return (
    <DataTableWrapper>
      <SearchInput
        setSearchText={setSearchText}
        searchText={searchText}
        filterData={filterData}
        setFilterData={setFilterData}
        apiData={apiData}
      />
      {isLoading ? (
        <AppLoader text="Featching data ...." />
      ) : !isLoading && serverError ? (
        <AppLoader text="Error in fetching data ..." />
      ) : filterData?.length ? (
        <React.Fragment>
          <table className="table">
            <TableHead setFilterData={setFilterData} filterData={filterData} />
            <tbody>
              {filterData.map((data: Todos, key: any) => {
                return <TableRow data={data} key={key} />;
              })}
            </tbody>
          </table>
          <Pagination />
        </React.Fragment>
      ) : (
        <AppLoader text="No data..." />
      )}
    </DataTableWrapper>
  );
};

export default DataTable;
