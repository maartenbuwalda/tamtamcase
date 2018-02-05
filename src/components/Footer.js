import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'
import facebook from '../images/icons/facebook.svg'
import twitter from '../images/icons/twitter.svg'
import instagram from '../images/icons/instagram.svg'
import facebookRed from '../images/icons/facebook-red.svg'
import twitterRed from '../images/icons/twitter-red.svg'
import instagramRed from '../images/icons/instagram-red.svg'

const FooterWrapper = styled.footer`
  grid-area: 'footer';
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 1.5rem;
    height: 1.5rem;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 1rem;
  }
`

const FacebookIcon = styled.div`
  background-image: url(${facebook});
  &:hover { background-image: url(${facebookRed}); }
`

const TwitterIcon = styled.div`
  background-image: url(${twitter});
  &:hover { background-image: url(${twitterRed}); }
`

const InstagramIcon = styled.div`
  background-image: url(${instagram});
  &:hover { background-image: url(${instagramRed}); }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FacebookIcon/>
      <TwitterIcon/>
      <InstagramIcon/>
    </FooterWrapper>
  )
}

export default Footer