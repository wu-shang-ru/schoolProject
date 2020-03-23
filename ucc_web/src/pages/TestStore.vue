<template>
    <div>
        <h1>Test Store</h1>
        {{currentCount}}

        {{localCount}}
        <button @click.prevent="increaseCount">增加計數器(1)</button>

        <br>
        <br>

        <label>增加數量</label>
        <input type="number" v-model.number="value"/>
        <button @click.prevent="addValue">增加計數器(value)</button>

        <br>
        <br>

        <router-link to="/">回首頁</router-link>
    </div>
</template>

<script>
   //  import { mapState } from 'vuex'
   import {mapGetters, mapActions} from 'vuex'

    export default {
       data(){
         return {
             value: 0
         }
       },

        methods: {
            increaseCount () {
                this.$store.commit('auth/increment')
            },

            addValue() {
                this.addCount(this.value)
            },

            ...mapActions({
                addCount: 'auth/add'
            })
        },
        computed: {
            localCount () {
                return 20
            },

            ...mapGetters({
                currentCount: 'auth/currentCount'
        })
        }
    }
</script>

<style></style>