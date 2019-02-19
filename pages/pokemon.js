import {withRouter} from 'next/router'
import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/MyLayout.js'

const StyledNav = styled.nav`
  background-color: red;
`

const StyledHeader = styled.header`
  background-color: red;
`
const fetchAsync = async () => {
  let data = await( await fetch("https://pokeapi.co/api/v2/pokemon/").json())
}

const PokedexEntry = withRouter(props => (
    <Layout>
      <StyledNav>
        <Link>prev</Link>
        <Link>home</Link>
        <Link>next</Link>
      </StyledNav>
      <StyledHeader>{props.router.query.name}</StyledHeader>
      <p>this is the pokedex entry for {props.router.query.name}</p>
    </Layout>
))

export default PokedexEntry
