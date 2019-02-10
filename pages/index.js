import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout.js';
import Search from '../components/Search';
import PokedexDisplay from '../components/PokedexDisplay';

export default class extends React.Component {

  static async getInitialProps() {
    let pokemon = {}
    const lsTest = () => {
      var test = 'test';
      try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch(e) {
      return false;
      }
    }
    if(lsTest() === true){
      if(localStorage.getItem('data')){
        pokemon = JSON.parse(localStorage.getItem('data'));
      } else {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=718");
        pokemon = await response.json();
      }
    }else{
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=718");
      pokemon = await response.json();
    }
    return {pokemon};
  }

  componentDidMount() {
    localStorage.setItem('data', JSON.stringify(this.props.pokemon));
  }

  render() {
    return (
      <Layout>
        <Search />
        <PokedexDisplay pokemon={this.props.pokemon} />
      </Layout>
    )
  }
}
