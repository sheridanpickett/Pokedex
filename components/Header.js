import NProgress from 'nprogress';
import Router from 'next/router';
import styled from 'styled-components';

const StyledHeader = styled.header`
    #header-background {
      height: 70px;
      position: relative;
      background-color: #CC0000;
      margin-bottom: 60px;
      z-index: -1;
    }
    #header-background:before {
      content: "";
      position: absolute;
      width: 50%;
      height: 120px;
      left: -10%;
      transform: skew(-45deg);
      background-color: #CC0000;
    }
    #header {
      height: 60px;
      position: relative;
      background-color: #E20210;
    }
    #header:before {
      content: "";
      position: absolute;
      width: 45%;
      height: 110px;
      left: -10%;
      transform: skew(-45deg);
      background-color: #E20210;
    }
    #header-icon {
      position: relative;
      width: 80px;
      height: 80px;
      background: #edf4f7;
      border-radius: 50%;
      top: 27%;
      left: 3%;
      z-index: 1;
    }
    #inner-icon {
      position: absolute;
      content: '';
      width: 70px;
      height: 70px;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      margin: -35px 0px 0px -35px;
      background-image: radial-gradient(at 70% 30%, white, ${props => props.theme.mainColor});
    }
    h1 {
      margin-top: 0;
    }
`

export default class Header extends React.Component {

	componentDidMount() {
		Router.events.on('routeChangeStart', () => NProgress.start());
		Router.events.on('routeChangeComplete', () => NProgress.done());
		Router.events.on('routeChangeError', () => NProgress.done());
	}

	render() {
		return (
			<StyledHeader>
        <div id="header-background">
          <div id="header">
            <div id="header-icon">
              <span id="inner-icon" />
            </div>
          </div>
        </div>
	    </StyledHeader>
	  )
	}
}
