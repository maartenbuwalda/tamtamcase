import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

const TextAreaWrapper = styled.textarea`
`

const TextAreaInput = styled.textarea`
  border: 0;
  display: block;
  padding: 1rem;
  resize: none;
`

const TextArea = (props) => {
  return (
    <TextAreaWrapper>
      <TextAreaInput
        id={props.id}
        onChange={props.onChange} 
        rows={props.rows} 
        type={props.type} 
        placeholder={props.placeholder}/>
    </TextAreaWrapper>
  )
}

export default TextArea