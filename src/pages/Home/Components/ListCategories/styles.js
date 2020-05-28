import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    titleContainer: {
        width: width,
        marginLeft: 30,
        marginBottom: 20,
        flexDirection: 'row',
    },
    titleText: {
        marginLeft: 20,
        fontSize: 20,
    },
    flatListContainer: {
        alignItems: 'center',
    },
});
