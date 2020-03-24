<template>
    <div>

        <!--未來可以把 NavHeader 放在這邊-->

        <button @click="$router.push('/user/info')">個人資料</button>
        <br>
        <br>
        <button>網站設定</button>
        <br>
        <br>
        <button>etc..</button>
        <br>
        <br>
        <button @click.prevent="logout">登出</button>
        <br>
        <br>
        <router-view/>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "User",

        methods: {
            ...mapActions({
                logout: 'auth/logout'
            })
        },

        beforeRouteEnter (to, from, next) {
            if (localStorage.getItem("isLogin")){
                next()
            }else{
                next('/')
            }
        }
    }
</script>

<style scoped>

</style>