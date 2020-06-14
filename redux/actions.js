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

function deletedGoal(goalObject){
    return{
        type: "DELETED_GOAL",
        payload: goalObject
    }
}

function completedGoal(goalObject){
    return{
        type:"COMPLETED_GOAL",
        payload: goalObject
    }
}


 export {fetchingGoals, addedGoal, deletedGoal, completedGoal}