import React from "react";
import { DataTableWrapper } from "./dataTable.styles";
import SearchInput from "./searchinput/SearchInput";
import { TableHead } from "./tablehead/TableHead";
import TableRow from "./tablerow/TableRow";

const DataTable = () => {
  return (
    <DataTableWrapper>
      <SearchInput />
      <table className="table">
        <TableHead />
        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </DataTableWrapper>
  );
};

export default DataTable;
