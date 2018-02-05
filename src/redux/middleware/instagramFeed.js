import axios from 'axios'
import {
  GET_INSTAGRAM_FEED_START,
  GET_INSTAGRAM_FEED_SUCCESS,
  GET_INSTAGRAM_FEED_ERROR,
  GET_INSTAGRAM_FEED_END
} from '../actiontypes'

const instagramFeed = store => next => action => {
  next(action)
  const dispatch = store.dispatch
  const accessToken = '2265267182.a7f9bd6.fb52f8188d9041fdb44633ae37203239'
  const userId = '176412031' //tamtamnl
  const myId = '2265267182'

  if(action.type === GET_INSTAGRAM_FEED_START){
    axios.get(`https://api.instagram.com/v1/users/${myId}/media/recent/?access_token=${accessToken}`)
      .then((response) => {
        dispatch({
          type: GET_INSTAGRAM_FEED_SUCCESS,
          payload: { 
            data: response.data.data
          }
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_INSTAGRAM_FEED_ERROR,
          payload: { error: error }
        })
      })
  }

  if(action.type === GET_INSTAGRAM_FEED_SUCCESS || action.type === GET_INSTAGRAM_FEED_ERROR){
    dispatch({ type: GET_INSTAGRAM_FEED_END })
  }
}

export default instagramFeed