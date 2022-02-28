import { createStore, Store, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { PointsState } from './ducks/points/types';

import rootReducer from './ducks/rootReducers';
import { UserState } from './ducks/user/types';




export interface ApplicationState {
    user: UserState,
    points: PointsState

}

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(thunk));


export default store;