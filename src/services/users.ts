import { User } from "../store/ducks/user/types"
import api from "./api"


export function getLoggedUser(id: number): Promise<any> {
    return api.get(`user/${id}`)
}