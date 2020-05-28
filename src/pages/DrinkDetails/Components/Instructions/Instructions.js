import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';

const Instructions = ({drink}) => {
    return (
        <View>
            <View style={styles.titleContainer}>
                <Icon name="library-books" size={30} color="#333" />
                <Text style={styles.title}>Instructions</Text>
            </View>
            <View style={styles.instructionsContainer}>
                <Text style={styles.instructionsText}>
                    {drink.strInstructions}
                </Text>
            </View>
        </View>
    );
};

export default Instructions;
