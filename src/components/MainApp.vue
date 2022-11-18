<script>
import SelectCategory from './SelectCategory.vue';
import CardMain from './CardMain.vue';
import LoadingProgress from './LoadingProgress.vue';
import {store} from '../data/store';
export default {
    name:'MainApp',
    components: {
        SelectCategory,
        CardMain,
        LoadingProgress
    },
    data(){
        return {
            store,
            showCards: 9
        }
    },
    methods: {
        showMoreCards(){
            if(this.showCards <= store.charactersData.length + 1) {
                this.showCards = this.showCards + this.showCards;
            }
        }
    }
}
</script>

<template>
    <main class="container">
        <SelectCategory @changeFilter="$emit('getNewApi')"/>
        <div class="content-main">
            <div class="mf-container">
                <div class="total-found">
                    <h4>
                        Found {{store.charactersData.length}} characters
                    </h4>
                </div>
                <div class="row" v-if="store.isInLoading">
                    <CardMain 
                    v-for="(character, index) in store.charactersData"
                    v-show="index < showCards"
                    :key="character.char_id"
                    :characters="character" />
                    <button  @click="showMoreCards" class="btn" v-if="showCards <= store.charactersData.length + 1">
                        SHOW MORE
                    </button>
                </div>
                <LoadingProgress v-else />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

    .mf-container {
        width: 90%;
        margin: 0 auto;
        padding-top: 40px;
    }
    .content-main {
        background-color: white;
        text-align: center;
        .total-found {
            text-align: start;
            padding: 10px;
            color: white;
            background-color: darken($primary-color, 9%);
        }
    }

    .row {
        padding: 20px;
    }

    button {
        color: white;
        background-color: darken($primary-color, 9%);
        margin-bottom: 20px;
        &:hover{
            background-color: $primary-color;
            color: white;
        }
    }
</style>