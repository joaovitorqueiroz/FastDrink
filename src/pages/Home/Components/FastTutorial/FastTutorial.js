import React, {useRef} from 'react';
import {View, Text, Dimensions} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';

const FastTutorial = () => {
    const width = Dimensions.get('window').width;
    const player1Ref = useRef(null);
    const player2Ref = useRef(null);

    return (
        <View>
            <View style={styles.titleContainer}>
                <Icon name="video-library" size={30} color="#999" />
                <Text style={styles.titleText}> Fast Tutorial </Text>
            </View>
            <View style={styles.videoContainer}>
                <YoutubePlayer
                    ref={player1Ref}
                    height={width * 0.9 * 0.56} //the height youtube video is 56% of width
                    width={width * 0.9}
                    videoId={'kbGCnu39YGM'}
                    play={false}
                    volume={50}
                    playbackRate={1}
                    playerParams={{
                        cc_lang_pref: 'us',
                        showClosedCaptions: true,
                    }}
                />
            </View>
            <View style={[styles.videoContainer]}>
                <YoutubePlayer
                    ref={player2Ref}
                    height={width * 0.9 * 0.56} //the height youtube video is 56% of width
                    width={width * 0.9}
                    videoId={'bEHBKSHCTu4'}
                    play={false}
                    volume={50}
                    playbackRate={1}
                    playerParams={{
                        cc_lang_pref: 'us',
                        showClosedCaptions: true,
                    }}
                />
            </View>
        </View>
    );
};

export default FastTutorial;
