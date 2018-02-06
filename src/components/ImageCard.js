import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

const ImageCardWrapper = styled.figure`
  background-color: ${colors.white};
  width: 300px;
  margin: 0 auto;
`

const Image = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  width: 300px;
  height: 300px;
`

const ImageDescription = styled.figcaption`
  color: ${colors.textGray};
  padding: 1rem;
  line-height: 1.5rem;
  text-align: left;

  &:empty {
    display: none;
  }
`

const ImageCard = (props) => {
  return (
    <ImageCardWrapper>
      <Image src={props.image}/>
      <ImageDescription>{props.text}</ImageDescription>
    </ImageCardWrapper>
  )
}

export default ImageCard