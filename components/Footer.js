import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: #E20210;
  padding: 20px;
  margin-top: 40px;
  h2{
    color: white;
    font-family: 'Oswald', sans-serif;
    width: 70%
    margin: 0 auto;
  }
  a {
    color: white;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <h2>Pokémon © 2002-2019 Pokémon. © 1995-2019 Nintendo/Creatures Inc./GAME
      FREAK inc. TM, ® and Pokémon character names are trademarks of Nintendo.</h2>
      <h2>Data from <a href="https://pokeapi.co">PokeAPI</a></h2>
      <h2>Icons made by <a href="https://smashicons.com">Smashicons</a></h2>
    </StyledFooter>
  )
}

export default Footer;
