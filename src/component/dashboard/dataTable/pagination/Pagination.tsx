import styled from "styled-components";
import { useQuery } from "../../../../hooks/useQuery";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PaginationWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 15px;
  div {
    cursor: pointer;
  }
`;
const Pagination = () => {
  let query: any = useQuery();
  const [limit, setLimit] = useState<number>(query.get("_limit"));
  const navigate = useNavigate();
  const inCreaseOrDecrese = (steps: number) => {
    if (query.get("_start") <= 0 && steps <= 0) {
      return;
    }
    let nextPage = parseInt(query.get("_start")) + steps;
    navigate(`/dashboard/?_start=${nextPage}&_limit=${10}`);
  };
  const selectHandler = (e: any) => {
    setLimit(e.target.value);
    navigate(
      `/dashboard/?_start=${query.get("_start")}&_limit=${e.target.value}`
    );
  };
  return (
    <PaginationWrapper>
      <div onClick={() => inCreaseOrDecrese(-20)}>{"<<"}</div>
      <div onClick={() => inCreaseOrDecrese(-10)}>{"<"}</div>
      <div>{query.get("_start")}</div>
      <div onClick={() => inCreaseOrDecrese(10)}>{">"}</div>
      <div onClick={() => inCreaseOrDecrese(20)}>{">>"}</div>
      <select
        name="limit"
        onChange={(e) => selectHandler(e)}
        defaultValue={5}
        value={limit}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
    </PaginationWrapper>
  );
};

export default Pagination;
