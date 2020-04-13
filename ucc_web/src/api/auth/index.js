import {postRequest} from '../../utils/UccSender'

export async function signin(userInfo) {
    return postRequest('/auth/login', userInfo)
}

export function signup(userInfo) {
    return postRequest('/auth/signup', userInfo)
}