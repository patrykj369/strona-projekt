import { IPhoto } from '../../entities/photos';

export const GET_IMAGE = 'GET_IMAGE';

export interface IImageTypes {
    GET_IMAGE: {
        imageList: IPhoto[];
    }
}