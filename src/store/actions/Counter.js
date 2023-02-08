const initialState = 0
function reducerCounter(state = initialState, action) {
    if(action.type === "decriment") {
        state--
        return state
    }
    if(action.type === "increment") {
        state++
        return state
    }
    return state
}

export {reducerCounter}