export enum UserTypes {
    GET_LOGGED_USER = '@users/GET_LOGGED_USER',
}

export interface User {
    name: string;
    image_url: string;
    position: string;
    points: string[];
}

export interface UserState {
    data: User;
    readonly loading: boolean;
    readonly error: boolean;
}