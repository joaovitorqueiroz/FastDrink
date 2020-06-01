import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

import Header from './Components/Header/Header';
import Ingredients from './Components/Ingredients/Ingredients';
import Instructions from './Components/Instructions/Instructions';

const DrinkDetails = ({drink}) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Header drink={drink} />
                <Ingredients drink={drink} />
                <Instructions drink={drink} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default connect((state) => ({
    drink: state.drinkDetails,
}))(DrinkDetails);
