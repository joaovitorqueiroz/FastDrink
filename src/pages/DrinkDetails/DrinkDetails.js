import React from 'react';
import {View, ScrollView, Text, Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ListIngredients from './Components/ListIngredients/ListIngredients';

import {styles} from './styles';

import {drink} from '../../data/drink';

const DrinkDetails = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.headerContainer}>
                    <Image
                        style={styles.imageDrink}
                        source={{
                            uri: drink.drinks[0].strDrinkThumb,
                        }}
                    />
                    <View style={styles.typeDrinkContainer}>
                        <Text style={styles.typeDrinkText}>
                            {drink.drinks[0].strAlcoholic}
                        </Text>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.titleContainer}>
                        <Icon
                            name="format-list-numbered"
                            size={30}
                            color="#333"
                        />
                        <Text style={styles.title}>Ingredients</Text>
                    </View>
                    <ListIngredients drink={drink.drinks[0]} />
                    <View style={styles.titleContainer}>
                        <Icon name="library-books" size={30} color="#333" />
                        <Text style={styles.title}>Instructions</Text>
                    </View>
                    <View style={styles.instructionsContainer}>
                        <Text style={styles.instructionsText}>
                            {drink.drinks[0].strInstructions}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DrinkDetails;
