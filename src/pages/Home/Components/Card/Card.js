import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {styles} from './styles';
import ico from './img/ico.png';

const Cards = ({categoryName, navigation}) => {
    function handleCard() {
        navigation.navigate('Drinks', {name: categoryName});
    }
    return (
        <TouchableOpacity onPress={() => handleCard()}>
            <View style={styles.container}>
                <Image source={ico} />
                <Text style={styles.textName}>{categoryName}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Cards;
