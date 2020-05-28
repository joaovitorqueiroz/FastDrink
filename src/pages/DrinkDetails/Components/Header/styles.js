import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    scrollViewContainer: {},
    headerContainer: {
        alignItems: 'center',
    },
    imageDrink: {
        width: width,
        height: width,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    typeDrinkContainer: {
        height: 60,
        width: width * 0.8,
        top: -30,
        borderRadius: 30,
        backgroundColor: '#CCC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    typeDrinkText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
