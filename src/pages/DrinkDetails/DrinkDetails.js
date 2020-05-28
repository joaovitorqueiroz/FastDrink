import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from './Components/Header/Header';
import Ingredients from './Components/Ingredients/Ingredients';
import Instructions from './Components/Instructions/Instructions';

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
                <Header drink={drink} />
                <View style={styles.bodyContainer}>
                    <Ingredients drink={drink} />
                    <Instructions drink={drink} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DrinkDetails;
