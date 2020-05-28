import React from 'react';
import {View, Image, Text} from 'react-native';

import {styles} from './styles';

const Header = ({drink}) => {
    return (
        <View style={styles.headerContainer}>
            <Image
                style={styles.imageDrink}
                source={{
                    uri: drink.strDrinkThumb,
                }}
            />
            <View style={styles.typeDrinkContainer}>
                <Text style={styles.typeDrinkText}>{drink.strAlcoholic}</Text>
            </View>
        </View>
    );
};

export default Header;
