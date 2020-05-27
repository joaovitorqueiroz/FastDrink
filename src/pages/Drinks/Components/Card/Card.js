import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

const Card = ({navigation, thumbUri, drinkName, idDrink}) => {
    function handleCard() {
        navigation.navigate('DrinkDetails', {
            name: drinkName,
            idDrink: idDrink,
        });
    }
    return (
        <TouchableOpacity onPress={() => handleCard()}>
            <View style={styles.container}>
                <Image
                    style={styles.thumb}
                    source={{
                        uri: thumbUri + '/preview',
                    }}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{drinkName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Card;
