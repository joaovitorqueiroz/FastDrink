import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home/Home';
import Drinks from './pages/Drinks/Drinks';
import DrinkDetails from './pages/DrinkDetails/DrinkDetails';

const Stack = createStackNavigator();
const routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                options={{headerShown: false}}
                component={Home}
            />
            <Stack.Screen
                name="Drinks"
                component={Drinks}
                options={({route}) => ({title: route.params.name})}
            />
            <Stack.Screen
                name="DrinkDetails"
                component={DrinkDetails}
                options={({route}) => ({title: route.params.name})}
            />
        </Stack.Navigator>
    );
};

export default routes;
