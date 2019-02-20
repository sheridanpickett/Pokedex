import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout.js';
import Search from '../components/Search';
import PokedexDisplay from '../components/PokedexDisplay';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: ""
    }
  }

  static async getInitialProps() {
    let pokemon = {};
    const ssTest = () => {
      var test = 'test';
      try {
        sessionStorage.setItem(test, test);
        sessionStorage.removeItem(test);
        return true;
      } catch(e) {
      return false;
      }
    }
    // check if session storage is set
    if(ssTest() === true){
      if(sessionStorage.getItem('data')){
        pokemon = JSON.parse(sessionStorage.getItem('data'));
      } else {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=718");
        pokemon = await response.json();
      }
    }else{
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=718");
      pokemon = await response.json();
    }
    pokemon.results.forEach((pokemon, index) => pokemon.id = index+1);
    return {pokemon};
  }

  componentDidMount() {
    sessionStorage.setItem('data', JSON.stringify(this.props.pokemon));
  }

  configGenerator = () => {
    let pokemon = this.props.pokemon.results;
    let config = pokemon.map(pokemon => {
      let element = <div>{`'/pokemon/${pokemon.name}': { page: '/pokemon', query: { id: ${pokemon.id} }}`}</div>;
      return element;
    })
    return config;
  }

  searchFilter = e => {
    let searchCriteria = e.target.value.toLowerCase();
    this.setState({searchCriteria: searchCriteria});
  }

  render() {
    return (
      <Layout>
        <Search searchFilter={this.searchFilter} />
        <PokedexDisplay pokemon={this.props.pokemon.results} searchCriteria={this.state.searchCriteria} />
        <br />
        <div>{this.configGenerator()}</div>
      </Layout>
    )
  }
}
