import React from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';

import Card from './Components/Card/Card';

import {styles} from './styles';

import {drinks} from '../../data/drinks';

const Drinks = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    data={drinks.drinks}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <Card
                            navigation={navigation}
                            drinkName={item.strDrink}
                            thumbUri={item.strDrinkThumb}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    );
};

export default Drinks;
