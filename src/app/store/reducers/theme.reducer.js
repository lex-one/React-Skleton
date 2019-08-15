const initialState = {
    mode: "light",
}

export default function theme(state = initialState, action)
{
    switch(action.type){
        case "A":
            return {dd: 545}
        default:
            return state;
    }
}