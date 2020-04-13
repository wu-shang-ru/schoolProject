import {setAuthorization, cleanAuthStore} from '@/utils/AuthStore'

const login = async function ({dispatch}, {tokenType, accessToken}) {
    setAuthorization({tokenType, accessToken});
    await dispatch('user/setUserInfo', null, { root: true });
};

const logout = async function () {
    cleanAuthStore()
};

const actions = {
    login,
    logout
};

export default actions