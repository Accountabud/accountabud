import { combineReducers } from 'redux'

const initial_state = [
    {goal: "donate", completed: false, id: 1},
    {goal: "read an article", completed: false, id: 2},
    {goal: "support black-owned business", completed: false, id: 3},
    {goal: "volunteer at a school", completed: false, id: 4},
    {goal: "go to a protest", completed: false, id: 5}
]

const goalsReducer = (state = initial_state, action) => {
    let goals
    switch(action.type){
        // case "FETCHED_GOALS":
        //     return action.payload
        case "ADDED_GOAL":
            goals = [...state]
            goals.push(action.payload)
            return goals
        case "DELETED_GOAL":
            goals = state.filter(p => p.id !== action.payload)
            return goals
        case "COMPLETED_GOAL":
            console.log("calling completed action in reducer")
            console.log(action.payload)
            goals = state.map(g => {
                if(g.id === action.payload){
                  return {...g, completed: true}
                } else{
                  return g
                }
              })
            return goals
        default: return state
    }
}

const rootReducer = combineReducers({
    goals: goalsReducer

})

export default rootReducer