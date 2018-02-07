import React, { Component } from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'
import ImageCard from './ImageCard'
import { media } from '../constants/breakpoints'

const HomeWrapper = styled.div`
`

const Carousel = styled.div`
`

const Introduction = styled.div`
  background-color: ${colors.white};
  padding: 3rem;
  text-align: center;

  h1 {
    margin-top: 0;
  }

  p {
    margin: auto;
    max-width: 940px;
  }
`

const InstagramFeed = styled.div`
  text-align: center;

  h2 {
    color: ${colors.steelBlue};
  }

  strong {
    color: ${colors.white};
    font-weight: normal;
  }
`

const FeedWrapper = styled.div`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  width: 300px;

  ${media.tablet`
    width: 600px;
    grid-template-columns: 1fr 1fr;
  `}

  ${media.desktop`
    width: 940px;
    grid-template-columns: 1fr 1fr 1fr;
  `}
`

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <Introduction>
          <h1>We are Tam Tam</h1>
          <p>Tam Tam is a full service digital agency focusing on Dutch Digital Service Design. We combine strategy, design, technology and interaction to make the digital interactions between company and customer valuable and memorable. We work for awesome brands with a team of 120 digitals from our office in Amsterdam. Making great work and having a blast doing it. That’s what we believe in.</p>
        </Introduction>
        <InstagramFeed>
          <h2>Follow us on Instagram</h2>
          <strong>@tamtamnl</strong>
          <FeedWrapper>
            {this.props.instagramFeed.data.map((instagramPost, i) => {
              return (
                <ImageCard 
                  key={i}
                  text={instagramPost.caption ? instagramPost.caption.text : ''}
                  image={instagramPost.images.standard_resolution.url}
                />
              )
            })}
          </FeedWrapper>
        </InstagramFeed>
      </HomeWrapper>
    );
  }
}

export default Home;
