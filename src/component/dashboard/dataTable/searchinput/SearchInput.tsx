import { FunctionComponent } from "react";
import styled from "styled-components";
import { Todos } from "../../../../types/interface/dashboard";
const SearchInputWrapper = styled("input")`
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.25;
  color: #495057;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  :focus {
    color: #4a4e69;
    background-color: #fff;
    border-color: #4a4e69;
    outline: none;
  }
`;
interface SearchInputProps {
  searchText: string;
  setSearchText: (e: any) => void;
  setFilterData: any;
  filterData: Array<Todos | []>;
  apiData: any;
}
const SearchInput: FunctionComponent<SearchInputProps> = ({
  searchText,
  setSearchText,
  apiData,
  filterData,
  setFilterData,
}) => {
  const onChangeHandler = (e: any) => {
    const value = e.target.value;
    setSearchText(value);
    if (value === "") {
      return setFilterData(apiData);
    }
    const result = apiData?.filter((data: Todos) => {
      return data.title.toLowerCase().includes(value.toLowerCase());
    });
    if (result.length) {
      return setFilterData(result);
    }
    if (!result.length) {
      return setFilterData([]);
    }
  };
  return (
    <SearchInputWrapper
      placeholder="Search something...."
      value={searchText}
      onChange={onChangeHandler}
    />
  );
};

export default SearchInput;
