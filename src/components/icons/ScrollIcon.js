import React  from 'react'
import arrowDownTouch from '../../images/icons/arrow_down_touch.svg'
import arrowDownTouchRed from '../../images/icons/arrow_down_touch-red.svg'
import mouse from '../../images/icons/mouse.svg'
import mouseRed from '../../images/icons/mouse-red.svg'
import arrowDown from '../../images/icons/arrow-down.svg'
import styled from 'styled-components'
import colors from '../../constants/colors'
import { media } from '../../constants/breakpoints'

const Icon = styled.div`
  transition: all .3s;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: ${colors.white};
  background-image: url(${arrowDownTouch});

  &:hover { 
    background-image: url(${arrowDownTouchRed}); 
  }

  ${media.desktop`
    background-image: url(${mouse});
    background-size: 50%;
    position: relative;

    &:hover { 
      transform: translateY(-.5rem);
      background-image: url(${mouseRed}); 

      &:before {
        opacity: 1;
        transform: translateY(1.5rem);
      }
    }

    &:before {
      transition: all .3s;
      opacity: 0;
      position: absolute;
      content: '';
      width: 2rem;
      height: 2rem;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 40%;
      transform: translateY(0rem);
      background-image: url(${arrowDown});
    }
  `}
`

const ArrowIcon = (props) => {
  return (
    <Icon/>
  )
}

export default ArrowIcon