import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';

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
        .then(response => this.setState({data: response}));
    }
  }

  componentWillUnmount() {
    localStorage.setItem('appState', JSON.stringify(this.state));
  }

  render() {
    console.log(this.state)
    if(this.state) {
      return (
          <Layout>
             <p>{this.state.data.count}</p>
             <img url={this.state.data.results} />
          </Layout>
      )
    } else {
      return (
          <Layout>
             {<p>2</p>}
          </Layout>
      )
    }
  }
}
