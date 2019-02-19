import {withRouter} from 'next/router'
import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/MyLayout.js'

const StyledContent = styled.div`
  font-family: "Silkscreen", sans-serif;
  background-color: white;
  .divider {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    text-align: left;
    padding: 10px;
    margin: 20px 0;
    background-color: red;
    color: white;
  }
  .flex {
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
  }
  .wrap {
    flex-wrap: wrap;
    border: 1px solid black;
  }
  .flex div {
    margin: 0 10px;
  }
  .genus {
    font-style: italic;
    font-size: 2rem;
    margin: 10px;
  }
  table {
    display: inline-block;
    th {
      padding: 5px;
      border-bottom: 3px dotted black;
    }
  }
  nav{
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin: 20px 0 0 0;
    background-color: red;
    color: white;
    a{
      color: white;
      text-decoration: none;
    }
  }
  h1 {
    padding: 30px;
    background-color: white;
    color: black;
    font-size: 3rem;
  }
`

const StyledType = styled.span`

`

class PokedexEntry extends React.Component {

  static async getInitialProps({ query }) {
    let data = {};
    try {
      data.pokemon = await(await fetch(`https://pokeapi.co/api/v2/pokemon/${query.id}`)).json();
      data.species = await(await fetch(`https://pokeapi.co/api/v2/pokemon-species/${query.id}`)).json();
    } catch(err) {

    }
    return data;
  }

  statDisplay = stat => {
    stat = Math.floor(stat/10);
    let statBar = ""
    for(let i = 0; i<stat ; i++){
      statBar += "|";
    }
    return statBar;
  }

  moveDisplay = method => {
    if(method=="Level") {
      let moves = this.props.pokemon.moves.map(move => {
        if(move.version_group_details[0].move_learn_method.name=="level-up") {
          return <tr><td>{move.move.name}</td><td>{move.version_group_details[0].level_learned_at}</td></tr>
        }
      })
      return moves;
    } else {
      let moves = this.props.pokemon.moves.map(move => {
        if(move.version_group_details[0].move_learn_method.name==method) {
          return <tr><td>{move.move.name}</td></tr>
        }
      })
      return moves;
    }
  }

  render() {
    const {pokemon, species} = this.props;
    console.log(this.props);
    if(!pokemon.name) {
      return (
        <h1>404 Page not found</h1>
      )
    } else {
      return (
        <Layout>
          <StyledContent>
            <nav>
              {species.id>1 ? <Link prefetch href={`/pokemon?id=${pokemon.id-1}`}><a>Prev</a></Link> : null}
              <Link href="/"><a>Home</a></Link>
              {species.id<718 ? <Link prefetch href={`/pokemon?id=${pokemon.id+1}`}><a>Next</a></Link> : null}
            </nav>
            <h1>{species.name} - {species.names[1].name}</h1>
            <img src={pokemon.sprites.front_default} />
            <div className="genus">
              {species.genera[1].language=="en" ?
              species.genera[1].genus.slice(0, -7) + "pokemon" :
              species.genera[2].genus.slice(0, -7) + "pokemon"}
            </div>
            <div>
              {species.flavor_text_entries[1].language.name=="en" ?
              species.flavor_text_entries[1].flavor_text :
              species.flavor_text_entries[2].flavor_text}
            </div>
            <div className="divider">
              <div className="flex">
                <div>
                  <div>{pokemon.stats[0].stat.name}</div>
                  <div>{pokemon.stats[1].stat.name}</div>
                  <div>{pokemon.stats[2].stat.name}</div>
                  <div>{pokemon.stats[3].stat.name}</div>
                  <div>{pokemon.stats[4].stat.name}</div>
                  <div>{pokemon.stats[5].stat.name}</div>
                </div>
                <div>
                  <div>{pokemon.stats[0].base_stat}</div>
                  <div>{pokemon.stats[1].base_stat}</div>
                  <div>{pokemon.stats[2].base_stat}</div>
                  <div>{pokemon.stats[3].base_stat}</div>
                  <div>{pokemon.stats[4].base_stat}</div>
                  <div>{pokemon.stats[5].base_stat}</div>
                </div>
                <div>
                  <div>{this.statDisplay(pokemon.stats[0].base_stat)}</div>
                  <div>{this.statDisplay(pokemon.stats[1].base_stat)}</div>
                  <div>{this.statDisplay(pokemon.stats[2].base_stat)}</div>
                  <div>{this.statDisplay(pokemon.stats[3].base_stat)}</div>
                  <div>{this.statDisplay(pokemon.stats[4].base_stat)}</div>
                  <div>{this.statDisplay(pokemon.stats[5].base_stat)}</div>
                </div>
              </div>
              <div>
                <div>ID : {pokemon.id}</div>
                <div>Height : {pokemon.height/10}M</div>
                <div>Weight : {pokemon.weight/10}KG</div>
                <div>
                  {pokemon.abilities.length==1 ?
                  <div>Ability : {pokemon.abilities[0].ability.name}</div> :
                  <div>Abilities : {pokemon.abilities[0].ability.name}, {pokemon.abilities[1].ability.name}</div>}
                </div>
                <div>
                  {pokemon.types.length==1 ?
                  <StyledType>Type: {pokemon.types[0].type.name}</StyledType> :
                  <StyledType>Types : {pokemon.types[0].type.name}, {pokemon.types[1].type.name}</StyledType>}
                </div>
                <div>
                  {species.egg_groups.length==1 ?
                  <span>Egg Group : {species.egg_groups[0].name}</span> :
                  <span>Egg Groups : {species.egg_groups[0].name}, {species.egg_groups[1].name}</span>}
                </div>
              </div>
            </div>
            <h4>Moves</h4>
            <div className="flex wrap">
              <table>
                <th>Tutor Moves</th>
                {this.moveDisplay("tutor")}
              </table>
              <table>
                <th colSpan="2">Level-up Moves</th>
                <tr><th>Move</th><th>Level</th></tr>
                {this.moveDisplay("Level")}
              </table>
              <table>
                <th>Egg Moves</th>
                {this.moveDisplay("egg")}
              </table>
            </div>
          </StyledContent>
        </Layout>
      )
    }
  }
}

export default PokedexEntry;
