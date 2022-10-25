import Profiles from "../../assets/Profiles";
import { Image, StyleSheet, View, Text, ImageBackground } from "react-native"
import Icons from "../../assets/Icons";
import themes from "../../assets/Themes/themes";


export default function Body() {
    return(
    <View style={styles.body}>
        <ImageBackground
        source={Profiles.mtl.image} imageStyle={{ borderRadius: 10}} style={styles.Image}>
          <Text
          style={styles.nameText}> MTL
          </Text>

          <Text
          style={styles.distanceText}> 1 mile away
          </Text>
        </ImageBackground> 
      
    
        <View style={styles.waveform}>
            <Text style={styles.audioText}>My hottest take</Text>
            <View style={styles.images}>
                <Image source={Icons.player.dark} style={styles.playButton}></Image>
                <Image source={Icons.audioWave.dark} style={styles.waveformButton}></Image>
            </View>
        </View>
    </View>
    
    )
    };


const styles = StyleSheet.create({
    nameText: {
      fontFamily: 'Sydney',
      color: themes.dark.text,
      fontFamily: 'Sydney',
      fontSize: 50,
    },
    audioText: {
      fontFamily: 'Sydney',
      color: themes.dark.text,
      fontSize: 30,
      paddingBottom: '5%'
    },
    distanceText: {
      fontFamily: 'Sydney',
      color: themes.dark.text,
      fontSize: 20,
      marginBottom: 10
    },
    body: {
      flex: 1,
      paddingHorizontal: '5%',
      justifyContent: 'space-evenly',
      //paddingTop: '12%',
      paddingBottom: '12%'
    },

    Image: {
      shadowColor: themes.dark.shadows.shadowColor,
      shadowOpacity: themes.dark.shadows.shadowOpacity,
      shadowRadius: themes.dark.shadows.shadowRadius,
      shadowOffset: themes.dark.shadows.shadowOffset,
      borderRadius: 20,
      width: '100%',
      justifyContent: 'space-between',
      aspectRatio: 1/1.1,
      paddingVertical: '2%',
      //paddingBottom: '2%'
    },
    hottestTake: {
      fontSize: 28,
      marginBottom: 10,
      fontFamily: 'Sydney',
    },

    waveform: {
      shadowColor: themes.dark.shadows.shadowColor,
      shadowOpacity: themes.dark.shadows.shadowOpacity,
      shadowRadius: themes.dark.shadows.shadowRadius,
      shadowOffset: themes.dark.shadows.shadowOffset,
      padding: '5%',
      backgroundColor: themes.dark.bgSecondary,
      borderRadius: 15,
      justifyContent: 'space-between',
    },

    playButton: {
      resizeMode: 'contain',
      width: '20%',
      aspectRatio: 1,
    },

    waveformButton: {
      resizeMode: 'contain',
      width: '80%',
      aspectRatio: 4
    },

    images: {
      flexDirection: 'row',
      alignItems: 'center'
    },
  });
  