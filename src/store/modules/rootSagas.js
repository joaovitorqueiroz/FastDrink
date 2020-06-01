import {all} from 'redux-saga/effects';
import home from './home/sagas';
import drinks from './drinks/sagas';
import drinkDetails from './drinkDetails/sagas';

export default function* rootSaga() {
    return yield all([home, drinks, drinkDetails]);
}
