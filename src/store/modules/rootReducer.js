import {combineReducers} from 'redux';

import drinksCategories from './home/reducer';
import listDrinks from './drinks/reducer';
import drinkDetails from './drinkDetails/reducer';

export default combineReducers({
    drinksCategories,
    listDrinks,
    drinkDetails,
});
