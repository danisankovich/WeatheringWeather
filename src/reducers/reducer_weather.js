import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) { // state defaults to array, because that is the datatype we know we want
  // console.log('ACTION RECEIVED', action); //redux promise middleware resolved that promise before it hit the reducer, so we get our data here
  // if the payload is a promise, redux-promise stops the action, finishes the request, then dispatches a new action of the same type, with a payload of the neww data.

  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); //not mutating state, returning new instance of it. better than push
      return [action.payload.data, ...state] //the es6 way.
  }
  return state;
}
