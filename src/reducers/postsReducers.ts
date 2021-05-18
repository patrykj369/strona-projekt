import { IPost } from '../entities/posts';
import * as postTypes from '../actions/actionTypes/postTypes';

export interface IPostsReducer {
    postsList: IPost[]
}

const defaultState = (): IPostsReducer => ({
    postsList: []
});

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case postTypes.GET_POSTS: {
            const data: postTypes.IPostTypes['GET_POSTS'] = action;
            return {
                ...state,
                postsList: data.postsList
            }
        }

        default: {
            return state
        }
    }
}