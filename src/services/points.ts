import api from "./api"

export function loadAllPost(): Promise<any> {
    return api.get(`points`)
}

export function GetMyPoints(id: number): Promise<any> {
    return api.get(`points/${id}`)
}
