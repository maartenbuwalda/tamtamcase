import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

const InputWrapper = styled.div`
`

const TextInput = styled.input`
  border: 0;
  display: block;
  padding: 1rem;
`

const Input = (props) => {
  return (
    <InputWrapper>
      <TextInput
        id={props.id}
        onChange={props.onChange} 
        type={props.type} 
        placeholder={props.placeholder}/>
    </InputWrapper>
  )
}

export default Input