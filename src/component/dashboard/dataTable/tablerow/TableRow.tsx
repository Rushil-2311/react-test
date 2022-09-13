import React, { FunctionComponent } from "react";
import { Todos } from "../../../../types/interface/dashboard";

interface TableRowData {
  data: Todos;
  key: number;
}
const TableRow: FunctionComponent<TableRowData> = ({ data, key }) => {
  return (
    <tr key={key}>
      <td>{data.id}</td>
      <td>{data.title}</td>
      <td>
        <input type="checkbox" checked={data.completed} />
      </td>
      <td>{data.userId}</td>
    </tr>
  );
};

export default TableRow;
