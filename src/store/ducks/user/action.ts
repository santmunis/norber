import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import { User, UserTypes } from './types';
import * as UserApi from '../../../services/users';

export const getLoggedUser = (id: number) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        return await UserApi.getLoggedUser(id).then(response => {
            return dispatch({
                type: UserTypes.GET_LOGGED_USER,
                data: response.data
            })
        })
    }
}