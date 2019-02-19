import styled from 'styled-components';

const StyledSearch = styled.input`
  display: block;
  color: #3CF;
  width: 220px;
  box-sizing: border-box;
  margin: 20px auto;
  border: 2px solid #3CF;
  border-radius: 4px;
  font-size: 16px;
  font-family: "Silkscreen", sans-serif;
  background-color: white;
  background-position: 10px 10px;
  background-image: url('/static/images/icons/searchicon.png');
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  transition: width 0.4s ease-in-out;
  ::placeholder {
    color: #3CF;
  }
  :focus, :hover {
    width: 100%;
  }
`

const Search = props => {
  return (
    <StyledSearch type="text" name="Search" placeholder="Search Pokedex" onChange={props.searchFilter} />
  )
}

export default Search
