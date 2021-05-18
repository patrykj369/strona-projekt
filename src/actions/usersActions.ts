import { Dispatch } from 'redux';
import * as userTypes from './actionTypes/userTypes';

import { IUser } from '../entities/users';

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
