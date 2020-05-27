import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
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
                <Header navigation={navigation} />
                <View style={styles.titleContainer}>
                    <Icon name="search" size={30} color="#999" />
                    <Text style={styles.titleText}> Categories </Text>
                </View>

                <View style={styles.flatListContainer}>
                    <FlatList
                        data={drinkCategories}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={({item}) => (
                            <Card
                                categoryName={item.strCategory}
                                navigation={navigation}
                                uriImage={item.uriImage}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Icon name="video-library" size={30} color="#999" />
                    <Text style={styles.titleText}> Fast Tutorial </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
