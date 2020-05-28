import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Card from '../Card/Card';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';

const ListCategories = ({drinkCategories, navigation}) => {
    return (
        <View>
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
        </View>
    );
};

export default ListCategories;
