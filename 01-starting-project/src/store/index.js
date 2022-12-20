import {createStore} from "redux"

const initState={counter:0,isShow:true}

const counterReducer=(state=initState,action)=>{

    if(action.type==="increment"){
        return{ ...state,counter:state.counter+Number(action.payload) }
    }
    if(action.type==="decrement"){
        return {...state, counter:state.counter-1}
    }
    if(action.type==="toggle"){
        return{...state,isShow:!state.isShow}
    }
    return state

}

const store=createStore(counterReducer)

export default store