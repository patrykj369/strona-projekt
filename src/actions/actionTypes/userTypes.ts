import { IUser } from '../../entities/users';
import { IPhoto } from '../../entities/photos';

export const GET_USERS = 'GET_USERS';
export const PUSH_DATA = 'PUSH_DATA';
export const GET_IMAGE = 'GET_IMAGE';

export interface IUserTypes {
    GET_USERS: {
        usersList: IUser[];
    };
    PUSH_DATA: {
        someData: string;
    }
    GET_IMAGE: {
        someImg: IPhoto[];
    }

}