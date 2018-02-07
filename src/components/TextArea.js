import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'
import ErrorTooltip from './ErrorTooltip'
import checkGreen from '../images/check-green.png'

const TextAreaInput = styled.textarea`
  border: 0;
  display: block;
  padding: 1rem;
  resize: none;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 25px 20px;
  background-position: 98% 1rem;

  &.valid {
    background-image: url(${checkGreen});
  }
`

const TextArea = (props) => {
  return (
    <div>
      <TextAreaInput
        id={props.id}
        onChange={props.onChange} 
        onBlur={props.onBlur}
        className={props.validated === true && 'valid'}
        rows={props.rows} 
        name={props.name} 
        placeholder={props.placeholder}/>
      { props.validated === false &&
        <ErrorTooltip>{props.errorText}</ErrorTooltip>
      }
    </div>
  )
}

export default TextArea