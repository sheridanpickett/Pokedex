import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-20%);
  }
`;


const StyledPokedex = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  display: inline-block;
  margin: 2px;
  border: 2px solid grey;
  background-color: white;
  &:hover {
    border: 2px solid #3CF;
  }
  img {
    width: 100%;
    margin: 0;
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
  }
  div {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  div:hover {
    animation: ${bounce} .3s steps(2) infinite;
  }
}
`

const PokedexDisplay = props => {
  let pokemon = props.pokemon.results.map((pokemon, index) => {
    return (
      <StyledPokedex>
        <Link href={`/pokemon?name=${pokemon.name}`}>
          <div>
            <img src={`/static/images/sprites/${index+1}.png`} />
          </div>
        </Link>
      </StyledPokedex>
    )
  });
  return(
    <div>
      {pokemon}
    </div>
  )
}

export default PokedexDisplay;
