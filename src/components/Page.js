import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'
import { media } from '../constants/breakpoints'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 620px;
  margin: 0 auto;

  h1 {
    margin: 1rem 0;
    text-align: center;
    color: ${colors.white};

    ${media.tablet`
      margin: 2rem 0 2rem;
    `}

    ${media.desktop`
      margin: 4rem 0 4rem;
    `}
  }
`

const Page = (props) => {
  return (
    <PageWrapper>
      {props.children}
    </PageWrapper>
  )
}

export default Page