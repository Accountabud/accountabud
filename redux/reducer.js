import { combineReducers } from 'redux'

const goalsReducer = (state = ["donate state"], action) => {
    switch(action.type){
        case "FETCHED_GOALS":
            return action.payload
        default: return state
    }
}

const rootReducer = combineReducers({
    goals: goalsReducer

})

export default rootReducer