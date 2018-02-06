import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'
import ErrorTooltip from './ErrorTooltip'

const TextInput = styled.input`
  width: calc(100% - 2rem);
  border: 0;
  display: block;
  padding: 1rem;
`

const Input = (props) => {
  return (
    <div>
      <TextInput
        id={props.id}
        onChange={props.onChange} 
        type={props.type} 
        placeholder={props.placeholder}/>
      { props.error &&
        <ErrorTooltip>{props.errorText}</ErrorTooltip>
      }
    </div>
  )
}

export default Input