import {call, put, all, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '../../../service/api';
import {drinkDetailsSuccess} from './actions';

function* drinkDetails({DrinkId}) {
    try {
        const response = yield call(api.get, `/lookup.php?i=${DrinkId}`);
        yield put(drinkDetailsSuccess(response.data.drinks[0]));
    } catch (error) {
        Alert.alert(
            'Connection fail',
            'Could not connect to the server',
            [{text: 'OK'}],
            {cancelable: false},
        );
        yield put(drinkDetailsSuccess([]));
    }
}

export default all([
    takeLatest('@drink_details/DRINK_DETAILS_REQUEST', drinkDetails),
]);
