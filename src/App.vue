<script>
import axios from 'axios';
import {store} from './data/store';
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
export default {
    name:'App',
    components: {
        HeaderApp,
        MainApp
    },
    data (){
        return {
            store
        }
    },
    methods: {
        getApiRequest(){
            store.isInLoading = false;
            axios.get(store.getApi, {
                params: {
                    category: store.filterWhitValue
                }
            })
                .then(characters => {
                    store.charactersData = characters.data;
                    store.isInLoading = true;
                })
        }
    },
    mounted(){
       this.getApiRequest();
    }
}
</script>

<template>
    <HeaderApp />
    <MainApp @getNewApi="getApiRequest()" />
</template>

<style lang="scss" >
    @use './styles/general';
</style>