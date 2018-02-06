import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'
import ErrorTooltip from './ErrorTooltip'

const TextAreaInput = styled.textarea`
  // width: calc(100% - 2rem);
  border: 0;
  display: block;
  padding: 1rem;
  resize: none;
`

const TextArea = (props) => {
  return (
    <div>
      <TextAreaInput
        id={props.id}
        onChange={props.onChange} 
        rows={props.rows} 
        type={props.type} 
        placeholder={props.placeholder}/>
      { props.error &&
        <ErrorTooltip>{props.errorText}</ErrorTooltip>
      }
    </div>
  )
}

export default TextArea