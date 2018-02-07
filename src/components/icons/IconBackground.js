import styled from 'styled-components'
import colors from '../../constants/colors'

const IconBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  margin-right: 1rem;
  transition: all .3s;

  background-color: ${props => {
    switch(props.color){
      case 'white': 
        return colors.white
      case 'black-faded':
        return 'rgba(000, 000, 000, .2);'
      case 'black': 
      default:
        return colors.black
    }
  }};

  &:hover {
    background-color: ${props => {
      switch(props.color){
        case 'white':
          return colors.white
        case 'black-faded':
          return 'background-color: rgba(000, 000, 000, .2);'
        case 'black': 
        default:
          return colors.red
      }
    }};
  }
`

export default IconBackground