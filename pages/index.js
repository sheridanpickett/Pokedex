import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout.js';
import Search from '../components/Search';

export default class extends React.Component {

  //fetch data from localStorage or from API
  componentDidMount() {
    if(localStorage.getItem('appState')!="null" && localStorage.getItem('appState')) {
      const state = JSON.parse(localStorage.getItem("appState"))
      const data = state.data;
      this.setState({data});
    } else {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=718")
        .then(response => response.json())
        .then(response => this.setState({data: response}))
        .then(() => localStorage.setItem('appState', JSON.stringify(this.state)));
    }
  }

  render() {
    if(this.state) {
      return (
          <Layout>
            <Search />
          </Layout>
      )
    } else {
      return (
          <Layout>
             <p>loading...</p>
          </Layout>
      )
    }
  }
}
