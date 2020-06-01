import {call, put, all, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '../../../service/api';
import {listDrinksCategoriesSuccess} from './actions';
import removeSpaceString from '../../../utils/removeSpaceString';

function* listDrinksCategories() {
    try {
        const response = yield call(api.get, '/list.php?c=list');
        const drinksCategories = yield all(
            response.data.drinks.map(async (item) => {
                const uriImage = await getUriFirstDrinkCategory(
                    item.strCategory,
                );

                return {
                    uriImage: uriImage,
                    strCategory: item.strCategory,
                };
            }),
        );
        yield put(listDrinksCategoriesSuccess(drinksCategories));
    } catch (error) {
        Alert.alert(
            'Connection fail',
            'Could not connect to the server',
            [{text: 'OK'}],
            {cancelable: false},
        );
    }

    async function getUriFirstDrinkCategory(category) {
        const response = await api.get(
            '/filter.php?c=' + removeSpaceString(category),
        );
        return response.data.drinks[0].strDrinkThumb;
    }
}

export default all([
    takeLatest('@home/LIST_DRINKS_CATEGORIES_REQUEST', listDrinksCategories),
]);
