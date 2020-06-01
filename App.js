import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import './src/config/ReactotronConfig';
import {Provider} from 'react-redux';
import Routes from './src/routes';
import store from './src/store';

const FastDrink = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </Provider>
    );
};

export default FastDrink;
