const initialState = {
    id: null,
    role: null,
    permission: null,
    profile: null,
    preference: null
}

export function user(state = initialState, action)
{
    switch(action.type){
        case "SET_USER":
            return {
                id: 1
            };
        default:
            return state;
    }
}