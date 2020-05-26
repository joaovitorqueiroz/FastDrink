import React from 'react';
import {Text, View, Button} from 'react-native';

// import { Container } from './styles';

const Home = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Drinks"
                onPress={() =>
                    navigation.navigate('Drinks', {
                        name: 'Custom profile header',
                    })
                }
            />
        </View>
    );
};

export default Home;
