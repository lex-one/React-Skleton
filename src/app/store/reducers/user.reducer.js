const initialState = {
    id: null,
    role: null,
    permission: null,
    profile: null,
    preference: null
}

export function user(state = initialState, action)
{
    // if(action.type === "SET_USER") debugger
    switch(action.type){
        case "SET_USER":
            return action.payload;
        case "SET_PREFERENCE":
            return {
                ...state,
                preference: action.payload
            };
        default:
            return state;
    }
}