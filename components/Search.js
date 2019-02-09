import styled from 'styled-components';

const StyledSearch = styled.input`
  display: block;
  color: #3CF;
  width: 200px;
  box-sizing: border-box;
  margin: 20px auto;
  border: 2px solid #3CF;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-position: 10px 10px;
  background-image: url('/static/images/icons/searchicon.png');
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  transition: width 0.4s ease-in-out;
  ::placeholder {
    color: #3CF;
  }
  :focus {
    border: 2px solid #3CF;
    outline: none;
    width: 100%;
`

const Search = () => {
  return (
    <StyledSearch type="text" name="Search" placeholder="Search Pokedex" />
  )
}

export default Search
