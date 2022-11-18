import {reactive} from 'vue';

export const store = reactive({
    getApi: 'https://www.breakingbadapi.com/api/characters',
    charactersData: [],
    isInLoading: true,
    filterWhitValue: ''
});