import React, {useState, useEffect} from 'react';
import {Text, View, Button, FlatList, SafeAreaView} from 'react-native';

import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import {styles} from './styles';

import api from '../../service/api';

const Home = ({navigation}) => {
    const [drinkCategories, setDrinkCategories] = useState([]);
    useEffect(() => {
        api.get('/list.php?c=list')
            .then(async (response) => {
                console.log(response.data);
                setDrinkCategories(response.data.drinks);
            })
            .catch((error) => {});
    }, []);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    data={drinkCategories}
                    numColumns={2}
                    ListHeaderComponent={<Header navigation={navigation} />}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <Card
                            categoryName={item.strCategory}
                            navigation={navigation}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    );
};

export default Home;
