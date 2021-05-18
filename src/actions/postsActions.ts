import { Dispatch } from 'redux';
import { IPost } from '../entities/posts';
import * as postTypes from './actionTypes/postTypes';


export const getPost = (): Promise<IPost[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((postsList: IPost[]) => {
        dispatch({
            type: postTypes.GET_POSTS,
            postsList
        })
    })
}) as any;