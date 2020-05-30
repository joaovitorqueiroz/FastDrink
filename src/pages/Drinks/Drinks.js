import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList, Alert, Text} from 'react-native';

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
                    setDrinks(response.data.drinks);
                })
                .catch((error) => {
                    alert();
                });
        } else {
            api.get('/filter.php?c=' + removeSpaceString(name))
                .then(async (response) => {
                    setDrinks(response.data.drinks);
                })
                .catch((error) => {
                    alert();
                });
        }
        function alert() {
            Alert.alert(
                'Connection fail',
                'Could not connect to the server',
                [
                    {
                        text: 'OK',
                        onPress: () => navigation.navigate('Home'),
                    },
                ],
                {
                    cancelable: false,
                },
            );
        }
    }, [name, searchOfInputDrink, navigation]);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                {drinks != null ? (
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
                ) : (
                    <View style={styles.notFoundContainer}>
                        <Text style={styles.notFoundText}>
                            No results were found for: {name}
                        </Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

export default Drinks;
