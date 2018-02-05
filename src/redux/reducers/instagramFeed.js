import { 
  GET_INSTAGRAM_FEED_START,
  GET_INSTAGRAM_FEED_SUCCESS,
  GET_INSTAGRAM_FEED_ERROR,
  GET_INSTAGRAM_FEED_END
} from '../actiontypes'

const defaultState = {
  isLoading: false,
  error: undefined,
  data: []
}

function instagramFeedReducer(state = defaultState, action) {
  switch(action.type){
    case GET_INSTAGRAM_FEED_START:
      return { ...state, isLoading: true }
    case GET_INSTAGRAM_FEED_SUCCESS:
      return { ...state, data: action.payload.data }
    case GET_INSTAGRAM_FEED_ERROR:
      return { ...state, error: action.payload.error }
    case GET_INSTAGRAM_FEED_END:
      return { ...state, isLoading: false }
    default:
      return state
  }
}

export { instagramFeedReducer }