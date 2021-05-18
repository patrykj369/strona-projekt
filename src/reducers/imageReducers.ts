import * as imageTypes from '../actions/actionTypes/imageTypes';
import { IPhoto } from '../entities/photos'

export interface IImageReducer {
    imageList: IPhoto[];
}

const defaultState = (): IImageReducer => ({
    imageList: []
});

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case imageTypes.GET_IMAGE: {
            const data: imageTypes.IImageTypes['GET_IMAGE'] = action;
            return {
                ...state,
                imageList: data.imageList
            }
        }
        default: {
            return state
        }
    }
}