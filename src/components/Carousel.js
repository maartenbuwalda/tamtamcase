import React  from 'react'
import styled from 'styled-components'
import Button from './Button'
import ArrowIcon from './icons/ArrowIcon'
import ScrollIcon from './icons/ScrollIcon'
import walibi from '../images/walibi.jpg'

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 7rem);
  padding-bottom: 3rem;
  background-image: url(${walibi});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
`

const CarouselNavigation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
  }
`

const Carousel = (props) => {
  return (
    <CarouselWrapper>
      <div/>
      <CarouselNavigation>
        <h2>Walibi</h2>
        <div>
          <ArrowIcon type='left'/>
          <Button>View case</Button>
          <ArrowIcon type='right'/>
        </div>
      </CarouselNavigation>
      <ScrollIcon className='bottom'/>
    </CarouselWrapper>
  )
}

export default Carousel