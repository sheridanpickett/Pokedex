import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body, h1, h2 {
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
  }
  body {
    background-image: url('/static/images/icons/dot-small.png');
  }
  a {
    text-decoration: none;
  }
`;

const StyledPage = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
`;

const StyledInner = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  padding: 0 10px;
`;

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        mainColor: '#3CF'
      }
    }
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <StyledPage>
          <GlobalStyle />
          <Meta />
          <Header />
            <StyledInner>
              {this.props.children}
            </StyledInner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    )
  }
}
