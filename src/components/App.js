import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import HomeContainer from '../redux/containers/HomeContainer'
import People from './People'
import Contact from './Contact'
import styled from 'styled-components'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

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
  componentWillMount(){
    this.props.getInstagramFeed()
    // console.log('hello')
  }

  render() {
    return (
      <BrowserRouter>
        <AppWrapper>
          <Header/>
          <Switch>
            <Redirect exact from='/' to='/home'/>
            <Route path='/home' render={ () => <HomeContainer/> }/>
            <Route path='/people' render={ () => <People/> }/>
            <Route path='/contact' render={ () => <Contact/> }/>
          </Switch>
          <Footer/>
        </AppWrapper>
      </BrowserRouter>
    );
  }
}

export default App;
