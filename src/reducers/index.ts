import { combineReducers } from 'redux';
import photos, { IImageReducer } from './imageReducers';

import users, { IUsersReducer } from './usersReducers';

import posts, { IPostsReducer } from './postsReducers';

export default combineReducers({
    users,
    photos,
    posts
})

export interface IState {
    users: IUsersReducer,
    photos: IImageReducer,
    posts: IPostsReducer
}