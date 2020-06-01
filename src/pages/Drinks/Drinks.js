import React from 'react';
import {View, SafeAreaView, FlatList, Alert, Text} from 'react-native';
import {connect} from 'react-redux';

import Card from './Components/Card/Card';
import {styles} from './styles';

const Drinks = ({navigation, route, drinks}) => {
    const {name} = route.params;
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

export default connect((state) => ({
    drinks: state.listDrinks,
}))(Drinks);
