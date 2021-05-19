import * as commentTypes from '../actions/actionTypes/commentTypes';
import { IComment } from '../entities/comments'

export interface ICommentsReducer {
    commentList: IComment[];
}

const defaultState = (): ICommentsReducer => ({
    commentList: []
});

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case commentTypes.GET_COMMENTS: {
            const data: commentTypes.ICommentTypes['GET_COMMENTS'] = action;
            return {
                ...state,
                commentList: data.commentList
            }
        }
        default: {
            return state
        }
    }
}