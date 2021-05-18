import { Dispatch } from 'redux';
import { IPhoto } from '../entities/photos';
import * as imageTypes from './actionTypes/imageTypes';

export const getImg = (): Promise<IPhoto[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then((imageList: IPhoto[]) => {
        dispatch({
            type: imageTypes.GET_IMAGE,
            imageList
        })
    })
}) as any;