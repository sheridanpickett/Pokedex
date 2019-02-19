import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  100% {
    transform: translateY(10%);
  }

  0% {
    transform: translateY(-10%);
  }
`;

const StyledPokedexContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 70px);
  grid-gap: 2px;
`;

const StyledPokedexEntry = styled.div`
  display: inline-block;
  position: relative;
  text-align: center;
  font-family: "Silkscreen", sans-serif;
  width: 70px;
  height: 70px;
  border: 2px solid grey;
  background-color: white;
  div {
    display: inline-block;
    width: 100%;
    height: 100%;
    outline-style: hidden;
  }
  .focus:focus div, .focus:hover div {
    animation: ${bounce} .3s steps(2) infinite;
  }
  .focus:focus, .focus:hover {
    outline: 5px solid #5E9ED6;
  }
  img {
    width: 100%;
  }
  span img {
    width: 15%;
  }
`;

const PokedexDisplay = props => {
  let pokemon = [];
  if(props.searchCriteria == "") {
    pokemon = props.pokemon.map((pokemon, index) => {
      return (
        <StyledPokedexEntry key={index}>
          <div className="focus" tabIndex="0">
          <span><img src="../static/images/icons/pokeball.png" />{pokemon.id}</span>
            <Link href={`/pokemon?id=${pokemon.id}`}>
              <div>
                <img src={`/static/images/sprites/${pokemon.id}.png`} alt={pokemon.name} />
              </div>
            </Link>
          </div>
        </StyledPokedexEntry>
      )
    })
  } else {
    pokemon = props.pokemon.filter(pokemon => pokemon.name.includes(props.searchCriteria));
    pokemon = pokemon.map((pokemon, index) => {
      return (
        <StyledPokedexEntry key={index}>
          <div className="focus" tabIndex="0">
          <span><img src="../static/images/icons/pokeball.png" />{pokemon.id}</span>
            <Link href={`/pokemon?id=${pokemon.id}`}>
              <div>
                <img src={`/static/images/sprites/${pokemon.id}.png`} alt={pokemon.name} />
              </div>
            </Link>
          </div>
        </StyledPokedexEntry>
      )
    })
  };
  return(
    <StyledPokedexContainer>
      {pokemon}
    </StyledPokedexContainer>
  )
}

export default PokedexDisplay;
