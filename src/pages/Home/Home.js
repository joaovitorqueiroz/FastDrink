import React, {useState, useEffect, useRef} from 'react';
import {
    View,
    Text,
    FlatList,
    SafeAreaView,
    ScrollView,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import removeSpaceString from '../../utils/removeSpaceString';
import YoutubePlayer from 'react-native-youtube-iframe';

import api from '../../service/api';

const Home = ({navigation}) => {
    const [drinkCategories, setDrinkCategories] = useState([]);

    useEffect(() => {
        api.get('/list.php?c=list')
            .then(async (response) => {
                let arrayPromises = response.data.drinks.map(async (item) => {
                    return {
                        uriImage:
                            (await getUriFirstDrinkCategory(item.strCategory)) +
                            '/preview',
                        strCategory: item.strCategory,
                    };
                });
                //console.log(await Promise.all(arrayPromises));
                setDrinkCategories(await Promise.all(arrayPromises));
            })
            .catch((error) => {});
    }, []);

    async function getUriFirstDrinkCategory(category) {
        const response = await api.get(
            '/filter.php?c=' + removeSpaceString(category),
        );
        //console.log(response.data.drinks[0].strDrinkThumb);
        return response.data.drinks[0].strDrinkThumb;
    }
    const width = Dimensions.get('window').width;
    return (
        <SafeAreaView>
            <ScrollView>
                <Header navigation={navigation} />
                <View style={styles.titleContainer}>
                    <Icon name="search" size={30} color="#999" />
                    <Text style={styles.titleText}> Categories </Text>
                </View>

                <View style={styles.flatListContainer}>
                    <FlatList
                        data={drinkCategories}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={({item}) => (
                            <Card
                                categoryName={item.strCategory}
                                navigation={navigation}
                                uriImage={item.uriImage}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Icon name="video-library" size={30} color="#999" />
                    <Text style={styles.titleText}> Fast Tutorial </Text>
                </View>
                <YoutubePlayer
                    //ref={playerRef}
                    height={300}
                    width={width}
                    videoId={'kbGCnu39YGM'}
                    play={false}
                    volume={50}
                    playbackRate={1}
                    playerParams={{
                        cc_lang_pref: 'us',
                        showClosedCaptions: true,
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
