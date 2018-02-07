import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'
import ErrorTooltip from './ErrorTooltip'
import checkGreen from '../images/check-green.png'

const TextInput = styled.input`
  width: calc(100% - 2rem);
  border: 0;
  display: block;
  padding: 1rem;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 25px 20px;
  background-position: 98% 50%;

  &.valid {
    background-image: url(${checkGreen});
  }
`

const Input = (props) => {
  return (
    <div>
      <TextInput
        id={props.id}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={props.validated === true && 'valid'}
        name={props.name} 
        placeholder={props.placeholder}/>
      { props.validated === false &&
        <ErrorTooltip>{props.errorText}</ErrorTooltip>
      }
    </div>
  )
}

export default Input