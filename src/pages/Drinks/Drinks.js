import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';

import Card from './Components/Card/Card';
import {styles} from './styles';

import api from '../../service/api';
import removeSpaceString from '../../utils/removeSpaceString';

const Drinks = ({navigation, route}) => {
    const {name} = route.params;
    const {searchOfInputDrink} = route.params;
    const [drinks, setDrinks] = useState([]);
    useEffect(() => {
        if (searchOfInputDrink) {
            api.get('/search.php?s=' + removeSpaceString(name))
                .then(async (response) => {
                    console.log(response.data);
                    setDrinks(response.data.drinks);
                })
                .catch((error) => {});
        } else {
            api.get('/filter.php?c=' + removeSpaceString(name))
                .then(async (response) => {
                    console.log(response.data);
                    setDrinks(response.data.drinks);
                })
                .catch((error) => {});
        }
    }, [name, searchOfInputDrink]);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    data={drinks}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <Card
                            navigation={navigation}
                            drinkName={item.strDrink}
                            thumbUri={item.strDrinkThumb}
                            idDrink={item.idDrink}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    );
};

export default Drinks;
