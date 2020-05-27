import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    containerHeader: {
        height: 280,
        width: width,
        alignItems: 'center',
    },
    logo: {
        marginTop: 30,
    },
    searchContainer: {
        height: 55,
        width: 310,
        overflow: 'hidden',
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#999',
        backgroundColor: '#ddd',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            width: 1,
            height: 2,
        },
    },
    inputSearch: {
        fontSize: 16,
        height: 55,
        width: '85%',
        paddingHorizontal: 15,
    },
});
