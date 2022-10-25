import { Image, StyleSheet, View, Text, ImageBackground } from "react-native"
import Icons from '../../assets/Icons';
import themes from "../../assets/Themes/themes";

export default function Footer() {
    return (
        <View style={styles.bottomRow}>
          <View style={styles.imageWithText}>
            <Image
            source={Icons.discover.dark}
            style={styles.bottomRowButton}>
            </Image>
            <Text style={styles.bottomRowText}> Discover </Text>
          </View>
        
          <View style={styles.imageWithText}>
            <Image
            source={Icons.heart.dark}
            style={styles.bottomRowHeart}>
            </Image>
            <Text style={styles.bottomRowText}> Matches </Text>
          </View>
          

          <View style={styles.imageWithText}>
            <Image
            source={Icons.messages.dark}
            style={styles.bottomRowButton}>
            </Image>
            <Text style={styles.bottomRowText}> DMs </Text>
          </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    bottomRow: {
      paddingVertical: 10,
      backgroundColor: themes.light.bg,
      width: '100%',
      flexDirection: 'row',
      marginBottom: 10,
      justifyContent: 'space-around',
      //paddingVertical: 59
    },
    bottomRowButton: {
      width: '5%',
      height: '4%',
      padding: 20,
    },
    bottomRowHeart: {
      width: 50,
      height: '4%',
      padding: 20
    },
    bottomRowText: {
      fontFamily: 'SydneyBold',
      color: 'black'
    },
    imageWithText: {
      alignItems: 'center'
    }
  });
  