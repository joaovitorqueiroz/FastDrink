import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';

import {styles} from './styles';
import Header from './Components/Header/Header';
import ListCategories from './Components/ListCategories/ListCategories';
import FastTutorial from './Components/FastTutorial/FastTutorial';
import removeSpaceString from '../../utils/removeSpaceString';

import api from '../../service/api';

const Home = ({navigation}) => {
    const [drinkCategories, setDrinkCategories] = useState([]);

    useEffect(() => {
        api.get('/list.php?c=list')
            .then(async (response) => {
                let arrayPromises = response.data.drinks.map(async (item) => {
                    return {
                        uriImage:
                            (await getUriFirstDrinkCategory(item.strCategory)) +
                            '/preview',
                        strCategory: item.strCategory,
                    };
                });
                //console.log(await Promise.all(arrayPromises));
                setDrinkCategories(await Promise.all(arrayPromises));
            })
            .catch((error) => {});
    }, []);

    async function getUriFirstDrinkCategory(category) {
        const response = await api.get(
            '/filter.php?c=' + removeSpaceString(category),
        );
        //console.log(response.data.drinks[0].strDrinkThumb);
        return response.data.drinks[0].strDrinkThumb;
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Header navigation={navigation} />
                    <ListCategories
                        drinkCategories={drinkCategories}
                        navigation={navigation}
                    />
                    <FastTutorial />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
