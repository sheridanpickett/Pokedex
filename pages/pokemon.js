import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'

const PokedexEntry = withRouter((props) => (
    <Layout>
       <h1>{props.router.query.name}</h1>
       <p>this is the pokedex entry for {props.router.query.name}</p>
    </Layout>
))

export default PokedexEntry
