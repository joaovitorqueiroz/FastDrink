import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ListIngredients from './Components/ListIngredients/ListIngredients';

import {styles} from './styles';

import api from '../../service/api';

const DrinkDetails = ({route}) => {
    const {idDrink} = route.params;
    const [drink, setDrink] = useState([]);
    useEffect(() => {
        api.get('/lookup.php?i=' + idDrink)
            .then(async (response) => {
                console.log(response.data.drinks[0]);
                setDrink(response.data.drinks[0]);
            })
            .catch((error) => {});
    }, [idDrink]);
    return (
        <SafeAreaView>
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.headerContainer}>
                    <Image
                        style={styles.imageDrink}
                        source={{
                            uri: drink.strDrinkThumb,
                        }}
                    />
                    <View style={styles.typeDrinkContainer}>
                        <Text style={styles.typeDrinkText}>
                            {drink.strAlcoholic}
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
                    <ListIngredients drink={drink} />
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
            </ScrollView>
        </SafeAreaView>
    );
};

export default DrinkDetails;
