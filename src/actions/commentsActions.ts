import { Dispatch } from 'redux';
import { IComment } from '../entities/comments';
import * as commentTypes from './actionTypes/commentTypes';

export const getComments = (): Promise<IComment[]> => (async (dispatch: Dispatch) => {

    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const commentList = await response.json();
    dispatch({
        type: commentTypes.GET_COMMENTS,
        commentList
    });
}) as any;