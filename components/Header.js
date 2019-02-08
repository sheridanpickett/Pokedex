import NProgress from 'nprogress';

const linkStyle = {
  marginRight: 15
}

export default class Header extends React.Component {

	componentDidMount() {
		Router.events.on('routeChangeStart', () => NProgress.start());
		Router.events.on('routeChangeComplete', () => NProgress.done());
		Router.events.on('routeChangeError', () => NProgress.done());
	}

	render() {
		return (
			<header>
		    <h1>Pokedex</h1>
	    </header>
	  )
	}
}
