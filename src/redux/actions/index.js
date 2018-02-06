export const getInstagramFeed = () => {
  return {
    type: 'GET_INSTAGRAM_FEED_START'
  }
}

export const submitContactForm = (form) => {
  return {
    type: 'SUBMIT_CONTACT_FORM_START',
    payload: {
      form
    }
  }
}