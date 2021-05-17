import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/userTypes';
import { IUser } from '../entities/users';
import { IPhoto } from '../entities/photos';

export const getUsers = (): Promise<IUser[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((usersList: IUser[]) => {
            dispatch({
                type: actionTypes.GET_USERS,
                usersList
            })
        })
}) as any;

export const getSomeData = (someData: string): Promise<IUser[]> => ((dispatch: Dispatch) => {

    dispatch({
        type: actionTypes.PUSH_DATA,
        someData
    })
}) as any;

export const getSomeImg = (): Promise<IPhoto[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then((someImg: IPhoto[]) => {
        dispatch({
            type: actionTypes.GET_IMAGE,
            someImg
        })
    })
}) as any;