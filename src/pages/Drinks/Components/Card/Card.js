import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {drinkDetailsRequest} from '../../../../store/modules/drinkDetails/actions';

import {styles} from './styles';

const Card = ({navigation, thumbUri, drinkName, idDrink}) => {
    const dispatch = useDispatch();
    function handleCard() {
        dispatch(drinkDetailsRequest(idDrink));
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
