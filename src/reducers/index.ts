import { combineReducers } from 'redux';
import photos, { IImageReducer } from './imageReducers';

import users, { IUsersReducer } from './usersReducers';

import posts, { IPostsReducer } from './postsReducers';

import comments, { ICommentsReducer } from './commentsReducers';

export default combineReducers({
    users,
    photos,
    posts,
    comments
})

export interface IState {
    users: IUsersReducer,
    photos: IImageReducer,
    posts: IPostsReducer
    comments: ICommentsReducer
}