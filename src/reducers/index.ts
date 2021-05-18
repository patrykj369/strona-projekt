import { combineReducers } from 'redux';
import photos, { IImageReducer } from './imageReducers';

import users, { IUsersReducer } from './usersReducers';

export default combineReducers({
    users,
    photos
})

export interface IState {
    users: IUsersReducer,
    photos: IImageReducer
}