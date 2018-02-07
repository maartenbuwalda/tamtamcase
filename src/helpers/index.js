export const validName = (text) => {
  if(!text.length || !text.match(/[a-zA-Z]/i)){
    return false
  } else {
    return true
  }
}

export const validEmail = (email) => {
  // Source: http://emailregex.com/
  if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    return false
  } else {
    return true
  }
}

export const validMessage = (text) => {
  if(!text.length){
    return false
  } else {
    return true
  }
}

export const validNumber = (number) => {
  if(!number.length || number.match(/[a-zA-Z]/i)){
    return false
  } else {
    return true
  }
}