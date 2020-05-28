import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 220,
        width: 150,
        marginBottom: 20,
        marginHorizontal: 10,
        borderRadius: 20,
        backgroundColor: '#292d30',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: {
            width: 2,
            height: 3,
        },
    },
    thumb: {
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    titleContainer: {
        width: 150,
        height: 70,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
});
