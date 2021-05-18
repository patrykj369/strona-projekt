import { Dispatch } from 'redux';
import * as userTypes from './actionTypes/userTypes';
import * as postTypes from './actionTypes/postTypes';

import { IUser } from '../entities/users';
import { IPosts } from '../entities/posts';

export const getUsers = (): Promise<IUser[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((usersList: IUser[]) => {
            dispatch({
                type: userTypes.GET_USERS,
                usersList
            })
        })
}) as any;

// export const getSomeData = (someData: string): Promise<IUser[]> => ((dispatch: Dispatch) => {

//     dispatch({
//         type: actionTypes.PUSH_DATA,
//         someData
//     })
// }) as any;


export const getPosts= (): Promise<IPosts[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((postsList: IPosts[]) => {
        dispatch({
            type: postTypes.GET_POSTS,
            postsList
        })
    })
}) as any;
