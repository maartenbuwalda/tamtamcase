import { combineReducers } from 'redux'
import { instagramFeedReducer } from './instagramFeed'

const reducers = combineReducers({
  instagramFeed: instagramFeedReducer
})

export { reducers };