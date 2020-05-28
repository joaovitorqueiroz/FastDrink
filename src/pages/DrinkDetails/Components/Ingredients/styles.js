import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 30,
    },
    titleContainer: {
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 30,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    rowIngredients: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    measureText: {
        marginLeft: 35,
        fontSize: 16,
        color: '#333',
    },
    ingredientText: {
        marginLeft: 5,
        fontSize: 16,
        color: '#333',
    },
});
