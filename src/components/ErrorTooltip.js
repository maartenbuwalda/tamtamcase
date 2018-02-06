import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

const ErrorTooltipWrapper = styled.span`
  display: block;
  background-color: ${colors.darkGray};
  color: ${colors.white};
  padding: 1rem;
  position: relative;

  &:before {
    content: '';
    top: -.5rem;
    transform: rotate(45deg);
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: ${colors.darkGray};
  }
`

const ErrorTooltip = (props) => {
  return (
    <ErrorTooltipWrapper>
      <span>{props.children}</span>
    </ErrorTooltipWrapper>
  )
}

export default ErrorTooltip