import {getRequest} from '../../utils/UccSender'

export function getUserInfo() {
    return getRequest('/user/me')
}
