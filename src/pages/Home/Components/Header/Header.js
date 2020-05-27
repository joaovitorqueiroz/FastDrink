import React, {useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

import logo from './img/logo.png';

// import { Container } from './styles';

const Header = () => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    return (
        <View style={styles.containerHeader}>
            <Image style={styles.logo} source={logo} />

            <View style={styles.searchContainer}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="search for a specific ingredient"
                    placeholderTextColor="#999"
                    style={styles.inputSearch}
                    value={inputSearchValue}
                    onChangeText={setInputSearchValue}
                    returnKeyType={'go'}
                />
                <Icon name="search" size={30} color="#999" />
            </View>
        </View>
    );
};

export default Header;
