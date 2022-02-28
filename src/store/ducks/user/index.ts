import { Reducer } from 'redux';
import { UserState, UserTypes, User } from './types'



const INITIAL_STATE: UserState = {
    data: {} as User,
    loading: false,
    error: false
}

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case UserTypes.GET_LOGGED_USER:
            return { data: action.data, loading: true } as UserState
        default:
            return state
    }
}

export default reducer