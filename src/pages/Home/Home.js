import React, {useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Alert} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {styles} from './styles';
import Header from './Components/Header/Header';
import ListCategories from './Components/ListCategories/ListCategories';
import FastTutorial from './Components/FastTutorial/FastTutorial';

import {listDrinksCategoriesRequest} from '../../store/modules/home/actions';

const Home = ({navigation, drinkCategories}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listDrinksCategoriesRequest());
    }, [dispatch]);

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

export default connect((state) => ({
    drinkCategories: state.drinksCategories,
}))(Home);
