import { Reducer } from 'redux';
import { PointsState, PointsTypes } from './types'



const INITIAL_STATE: PointsState = {
    data: [],
    loading: false,
    error: false
}

const reducer: Reducer<PointsState> = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case PointsTypes.LOAD_POINTS:
            return { ...state, loading: true }
        case PointsTypes.LOAD_SUCCCES:
            return { ...state, loading: false, error: false, data: action.data }
        default:
            return state
    }
}

export default reducer