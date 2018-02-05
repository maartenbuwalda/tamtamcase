import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem auto 6rem;
  grid-template-areas: 
    "header"
    "main"
    "footer";
  width: 100%;
  height: 100vh;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header/>
        <div/>
        <Footer/>
      </AppWrapper>
    );
  }
}

export default App;
