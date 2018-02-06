import { combineReducers } from 'redux'
import { instagramFeedReducer } from './instagramFeed'
import { contactFormReducer } from './contactForm'

const reducers = combineReducers({
  instagramFeed: instagramFeedReducer,
  contactForm: contactFormReducer
})

export { reducers };