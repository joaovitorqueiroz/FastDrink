import React, {useState} from 'react';
import {View, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

import logo from './img/logo.png';

const Header = ({navigation}) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    function handleSearch() {
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
                    returnKeyType={'go'}
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
