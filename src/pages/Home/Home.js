import React from 'react';
import {Text, View, Button, FlatList, SafeAreaView} from 'react-native';

import {categories} from '../../data/categories';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import {styles} from './styles';

const Home = ({navigation}) => {
    console.log(categories);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    data={categories.drinks}
                    numColumns={2}
                    ListHeaderComponent={Header}
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
