<template>
    <div>
        <h6>登入成功，1 秒後進行跳轉...</h6>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "Oauth2Redirect",

        methods: {
            redirectToHome(){
                this.$router.replace({ path: '/' })
            },

            ...mapActions({
                login: 'auth/login'
            })
        },

        mounted() {
            const errorMsg = this.$route.query.error;
            if (errorMsg != null){
                alert(errorMsg);
                this.$router.push("/");
            }else{
                const tokenType = this.$route.query.tokenType;
                const accessToken = this.$route.query.accessToken;
                this.login({tokenType, accessToken});
                this.timer = setTimeout(this.redirectToHome, 1000);
            }
        },

        beforeDestroy() {
            clearTimeout(this.timer);
        }
    }
</script>

<style scoped>

</style>