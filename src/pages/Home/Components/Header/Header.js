import React, {useState} from 'react';
import {View, Image, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

import {listDrinksOfSearchRequest} from '../../../../store/modules/drinks/actions';
import logo from './img/logo.png';

const Header = ({navigation}) => {
    const dispatch = useDispatch();
    const [inputSearchValue, setInputSearchValue] = useState('');
    function handleSearch() {
        dispatch(listDrinksOfSearchRequest(inputSearchValue));
        navigation.navigate('Drinks', {
            name: inputSearchValue,
            searchOfInputDrink: true,
        });
    }
    return (
        <View style={styles.containerHeader}>
            <Image style={styles.logo} source={logo} />

            <View style={styles.searchContainer}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="search for a drink"
                    placeholderTextColor="#999"
                    style={styles.inputSearch}
                    value={inputSearchValue}
                    onChangeText={setInputSearchValue}
                    returnKeyType={'search'}
                    onSubmitEditing={() => handleSearch()}
                />
                <Icon
                    onPress={() => handleSearch()}
                    name="search"
                    size={30}
                    color="#999"
                />
            </View>
        </View>
    );
};

export default Header;
