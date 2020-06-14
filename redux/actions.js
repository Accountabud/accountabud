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

function addedGoal(goalString){
    return{
        type: "ADDED_GOAL",
        payload: {goal: goalString, completed: false, id: Date.now()}
    }
}

function deletedGoal(goalId){
    return{
        type: "DELETED_GOAL",
        payload: goalId
    }
}

function completedGoal(goalId){
    return{
        type:"COMPLETED_GOAL",
        payload: goalId
    }
}


 export {fetchingGoals, addedGoal, deletedGoal, completedGoal}