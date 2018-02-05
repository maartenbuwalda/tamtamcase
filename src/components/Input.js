import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

const InputWrapper = styled.input`
  border: 0;
  display: block;
  padding: 1rem;
`

const Input = (props) => {
  return (
    <InputWrapper type={props.type} placeholder={props.placeholder}>
      {props.children}
    </InputWrapper>
  )
}

export default Input