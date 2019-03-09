import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/MyLayout.js';
import Search from '../components/Search';
import PokedexDisplay from '../components/PokedexDisplay';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: "",
    }
  }

  static async getInitialProps() {
    let pokemon = {};
    try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=718");
    pokemon = await response.json();
    pokemon.results.forEach((pokemon, index) => pokemon.id = index+1);
    } catch(err) {
    console.log(err);
    }
    return {pokemon};
  }

  componentDidMount() {
    sessionStorage.setItem('data', JSON.stringify(this.props.pokemon));
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
      </Layout>
    )
  }
}
