import styled from "styled-components";
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

const SearchInput = () => {
  return <SearchInputWrapper placeholder="Search something...." />;
};

export default SearchInput;
