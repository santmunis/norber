export enum PointsTypes {
    LOAD_POINTS = '@users/LOAD_POINTS',
    LOAD_SUCCCES = '@users/LOAD_SUCCCES',
}

export interface Points {
    id: number,
    name: string,
    post: string,
    points?: string,
    hours?: string,
}

export interface PointsState {
    data: Points[];
    readonly loading: boolean
    readonly error: boolean
}