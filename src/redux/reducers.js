import { combineReducers } from "redux";

import events from './slices/eventsSlice.js'

import wishlist from './slices/wishlistSlice.js'

import participants from './slices/participateSlice.js'

const reducers = combineReducers({

    events,
    wishlist,
    participants

})



export default reducers