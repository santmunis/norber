import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';

import * as PointsApi from '../../../services/points';

import { PointsTypes } from "./types"

export const loadRequest = () => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<any> => {
        dispatch({ type: PointsTypes.LOAD_POINTS })
        return await PointsApi.loadAllPost().then(response => {
            return dispatch(loadSuccess(response.data));
        });


    }
}

export const loadSuccess = (data: any) => {
    return {
        type: PointsTypes.LOAD_SUCCCES,
        data
    }
}