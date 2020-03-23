<template>
    <div>
        <h6>登入成功，2 秒後進行跳轉...</h6>
        <div>your token {{token}}</div>
    </div>
</template>

<script>
    export default {
        name: "Oauth2Redirect",

        data(){
            return{
                token: '',
            }
        },

        created() {
            this.token = this.$route.query.token
        }
    }
</script>

<style scoped>

</style>