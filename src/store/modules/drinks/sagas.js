import {call, put, all, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '../../../service/api';
import {
    listDrinksOfSearchSuccess,
    listDrinksOfCategorySuccess,
} from './actions';
import removeSpaceString from '../../../utils/removeSpaceString';

function* listDrinksOfSearch({DrinkSearch}) {
    try {
        const response = yield call(
            api.get,
            '/search.php?s=' + removeSpaceString(DrinkSearch),
        );
        yield put(listDrinksOfSearchSuccess(response.data.drinks));
    } catch (error) {
        yield put(listDrinksOfSearchSuccess([]));
        Alert.alert(
            'Connection fail',
            'Could not connect to the server',
            [{text: 'OK'}],
            {cancelable: false},
        );
    }
}

function* listDrinksOfCategory({NameCategory}) {
    try {
        const response = yield call(
            api.get,
            '/filter.php?c=' + removeSpaceString(NameCategory),
        );
        yield put(listDrinksOfCategorySuccess(response.data.drinks));
    } catch (error) {
        yield put(listDrinksOfCategorySuccess([]));
        Alert.alert(
            'Connection fail',
            'Could not connect to the server',
            [{text: 'OK'}],
            {cancelable: false},
        );
    }
}

export default all([
    takeLatest('@drinks/LIST_DRINKS_OF_SEARCH_REQUEST', listDrinksOfSearch),
    takeLatest('@drinks/LIST_DRINKS_OF_CATEGORY_REQUEST', listDrinksOfCategory),
]);
