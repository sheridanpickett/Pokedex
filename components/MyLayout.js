import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

const theme = {
  mainColor: '#3CF'
}

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
`;

const StyledPage = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
`;

const StyledInner = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 10px;
`;

export default class Layout extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
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
