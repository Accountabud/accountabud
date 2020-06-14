import firebase from '../config/Firebase'

function fetchingGoals(){
    return(dispatch) => {
console.log("hitting actions")
        firebase.getGoals()
        .then(goals => {
            console.log("Goal:", goals)
            dispatch(fetchedGoals(goals))
        })
    }
}

function fetchedGoals(goals){
    return {
        type: "FETCHED_GOALS",
        payload: goals
    }
 }

 export {fetchingGoals}