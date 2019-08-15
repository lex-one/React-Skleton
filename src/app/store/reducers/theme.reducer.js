const initialState = {
    mode: "light",
}

export function theme(state = initialState, action)
{
    switch(action.type){
        case "":
            return {}
        default:
            return state;
    }
}