import React, {useState, useEffect} from 'react';
import {ScrollView, SafeAreaView} from 'react-native';

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
            <ScrollView>
                <Header drink={drink} />
                <Ingredients drink={drink} />
                <Instructions drink={drink} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default DrinkDetails;
