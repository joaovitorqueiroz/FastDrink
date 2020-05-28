import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 220,
        overflow: 'hidden',
        marginBottom: 20,
        marginHorizontal: 10,

        alignItems: 'center',
    },
    imageThumbContainer: {
        width: 150,
        height: 150,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            width: 1,
            height: 2,
        },
    },
    imageThumb: {
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    textName: {
        fontSize: 15,
        marginTop: 5,
        color: '#333',
        textAlign: 'center',
    },
});
