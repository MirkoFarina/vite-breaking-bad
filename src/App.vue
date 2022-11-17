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
            axios.get('https://www.breakingbadapi.com/api/characters')
                .then(characters => {
                    store.charactersData = characters.data;
                    console.log(store.charactersData);
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
    <MainApp />
</template>

<style lang="scss" >
    @use './styles/general';
</style>