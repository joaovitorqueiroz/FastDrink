import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {styles} from './styles';

const Cards = ({categoryName, uriImage, navigation}) => {
    function handleCard() {
        navigation.navigate('Drinks', {
            name: categoryName,
            searchOfInputDrink: false,
        });
    }
    //console.log(uriImage);
    return (
        <TouchableOpacity onPress={() => handleCard()}>
            <View style={styles.container}>
                <View style={styles.imageThumbContainer}>
                    <Image style={styles.imageThumb} source={{uri: uriImage}} />
                </View>
                <Text style={styles.textName}>{categoryName}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Cards;
