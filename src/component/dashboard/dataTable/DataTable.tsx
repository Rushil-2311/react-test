import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { Todos } from "../../../types/interface/dashboard";
import AppLoader from "../../common/AppLoader";
import { DataTableWrapper } from "./dataTable.styles";
import Pagination from "./pagination/Pagination";
import SearchInput from "./searchinput/SearchInput";
import { TableHead } from "./tablehead/TableHead";
import TableRow from "./tablerow/TableRow";

const DataTable = () => {
  const [filterData, setFilterData] = useState<Array<Todos>>([]);
  const [searchText, setSearchText] = useState<string>("");
  const { isLoading, serverError, apiData } = useFetch(
    `http://jsonplaceholder.typicode.com/todos?_start=0&_limit=5`
  );
  useEffect(() => {
    console.log("calling");
    setFilterData(apiData);
  }, [apiData]);
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
