import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        overflow: 'hidden',
        borderRadius: 20,
        backgroundColor: '#f5d74f',
        marginBottom: 20,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            width: 1,
            height: 2,
        },
    },
    textName: {
        fontSize: 18,
        marginTop: 5,
        textAlign: 'center',
    },
});
