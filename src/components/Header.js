import React, {Component}  from 'react'
import logo from '../images/icons/logo.svg'
import menu from '../images/icons/menu.svg'
import close from '../images/icons/close.svg'
import styled from 'styled-components'
import colors from '../constants/colors'
import { media } from '../constants/breakpoints'
import { NavLink } from 'react-router-dom'

const HeaderWrapper = styled.div`
  grid-area: 'header';
  background-color: ${colors.black};
  max-height: 4rem;
  height: 4rem;

  ${media.tablet`display: flex;`}
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;

  img {
    margin: auto;
    transform: translateX(-1rem) // Just for centering the logo on mobile

    ${media.tablet`transform: none;`}
  }
`

const MenuIcon = styled.label`
  height: 1.5rem;
  width: 1.5rem;
  background-image: url(${menu});
  background-repeat: no-repeat;
  background-size: cover;
  display: block;

  ${media.tablet`display: none;`}
`

const HiddenInput = styled.input`
  display: none;

  &:checked {
    ~nav {
      width: 100%;
      opacity: 1;
    }
    ~div > label {
      background-image: url(${close});
    }
  }
`

const Navigation = styled.nav`
  opacity: 0;
  width: 0;
  height: calc(100vh - 4.15rem);
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  
  display: flex;
  transition: all .3s;
  overflow: hidden;
  background-color: ${colors.black};

  a {
    font-size: 2rem;
    color: ${colors.white};
    margin-top: 2rem;
    
    text-decoration: none;
    transition: all .3s;

    &.selected {
      color: ${colors.red}
    }
  }

  ${media.tablet`
    opacity: 1;
    width: auto;
    height: auto;
    flex-direction: row;

    a {
      color: ${colors.mediumGray};
      font-size: 1rem;
      margin: 0 1rem;

      &:hover {
        color: ${colors.red}
      }

      &.selected {
        color: ${colors.white}
      }
    }
  `}
`

class Header extends Component {

  // Close the menu after clicking a link
  _closeMenu = () => {
    document.getElementById('navigation-toggle').checked = false
  }

  render(){
    return (
      <HeaderWrapper>
        <HiddenInput id='navigation-toggle' type='checkbox'/>
        <IconWrapper>
          <MenuIcon htmlFor='navigation-toggle'/>
          <img src={logo}/>
        </IconWrapper>
        <Navigation>
          <NavLink onClick={this._closeMenu} activeClassName='selected' to='/'>Home</NavLink>
          <NavLink onClick={this._closeMenu} activeClassName='selected' to='/people'>People</NavLink>
          <NavLink onClick={this._closeMenu} activeClassName='selected' to='/contact'>Contact</NavLink>
        </Navigation>
      </HeaderWrapper>
    )
  }
}

export default Header