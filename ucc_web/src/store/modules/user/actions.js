import * as types from './mutation-types'
import {getUserInfo} from "@/api/user";
import {authenticated, cleanAuthStore} from "@/utils/AuthStore";

const setUserInfo = function ({commit}) {
    if (authenticated()) {
        getUserInfo()
            .then(res => {
                let userInfo = {
                    userName: res.data.name,
                    userId: res.data.id,
                    email: res.data.email,
                    imgUrl: res.data.imageUrl,
                    provider: res.data.provider,
                };
                console.log("user actions: " + userInfo.userName + ": " + userInfo.email);
                commit(types.SET_USER_INFO, userInfo)
            })
            .catch(error => {
                alert('使用者憑證過期，請重新登入');
                cleanAuthStore();
                console.log('user not login');
                console.log(error)
            })
    }
};

const actions = {
    setUserInfo,
};

export default actions