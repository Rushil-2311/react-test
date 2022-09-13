import { FunctionComponent, useState } from "react";
import { Todos } from "../../../../types/interface/dashboard";
import up_arrow from "../../../../assets/up_arrow.png";
import down_arrow from "../../../../assets/down_arrow.png";
interface TableHeadProps {
  setFilterData: any;
  filterData: Array<Todos>;
}
export const TableHead: FunctionComponent<TableHeadProps> = ({
  setFilterData,
  filterData,
}) => {
  const [asending, setAsending] = useState(false);
  const tableHeading: Array<string> = ["id", "title", "completed", "userId"];
  const sortTableData = (type: string, sortingOrder: boolean) => {
    setAsending(sortingOrder);
    let data = filterData.slice();
    if (sortingOrder) {
      data.sort((a: any, b: any) => {
        if (a[type] > b[type]) return 1;
        if (a[type] < b[type]) return -1;
        return 0;
      });
    } else {
      data.sort((a: any, b: any) => {
        if (a[type] < b[type]) return 1;
        if (a[type] > b[type]) return -1;
        return 0;
      });
    }
    setFilterData(data);
  };
  return (
    <thead>
      <tr>
        {tableHeading.map((data: string) => {
          return (
            <th key={data} onClick={() => sortTableData(data, !asending)}>
              {data}
              <img
                style={{ width: "10px", height: "10px" }}
                src={asending ? up_arrow : down_arrow}
                alt=""
              />
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
