import { IUser } from '../entities/users';
import * as userTypes from '../actions/actionTypes/userTypes';

export interface IUsersReducer {
    usersList: IUser[]
}

const defaultState = (): IUsersReducer => ({
    usersList: []
});

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case userTypes.GET_USERS: {
            const data: userTypes.IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                usersList: data.usersList
            }
        }

        default: {
            return state
        }
    }
}