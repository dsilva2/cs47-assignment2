import { StyleSheet, Text, View, Image } from 'react-native';
import Icons from '../../assets/Icons/index.js';

export default function Header() {
  return(
    <View style={styles.titleRow}>
        <Image
        source={Icons.menu.dark}
        style={styles.button}>
        </Image>
      
        <Text style={styles.titleText}>ensom</Text>
        

        <Image
        source={Icons.moon}
        style={styles.button}>
        </Image>
    </View>
    )
}


const styles = StyleSheet.create({
    button: {
      width: 50,
      height: 50
      //flex: 1
    },
    titleRow: {
      flexDirection: 'row',
      //marginBottom: 10,
      marginTop: '12%',
      paddingHorizontal: 15,
      backgroundColor: Themes.dark.bg,
      justifyContent: 'center',
      width: '100%',
      justifyContent: 'space-between',
    },
    titleText: {
      fontSize: 32,
      textAlign: 'center',
      fontFamily: 'SydneyBold',
      color: Themes.dark.text
    },

  });
  