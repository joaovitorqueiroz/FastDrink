import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Ingredients = ({drink}) => {
    function listIngredients() {
        let Ingredients = [];
        for (let i = 1; i <= 15; i++) {
            if (drink[`strIngredient${i}`]) {
                Ingredients.push(
                    <View style={styles.rowIngredients} key={i}>
                        <Icon name="check" size={25} color="#333" />

                        <Text style={styles.measureText}>
                            {drink[`strMeasure${i}`]}
                        </Text>
                        <Text style={styles.ingredientText}>
                            {drink[`strIngredient${i}`]}
                        </Text>
                    </View>,
                );
            }
        }
        return Ingredients;
    }
    return (
        <View>
            <View style={styles.titleContainer}>
                <Icon name="format-list-numbered" size={30} color="#333" />
                <Text style={styles.title}>Ingredients</Text>
            </View>
            <View style={styles.container}>{listIngredients()}</View>
        </View>
    );
};

export default Ingredients;
