import React from 'react';
import {Text, View, Button} from 'react-native';

// import { Container } from './styles';

const Drinks = (props) => {
    console.log(props);
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title={'Go to DrinksDetails '}
                onPress={() => props.navigation.navigate('DrinkDetails')}
            />
        </View>
    );
};

export default Drinks;
