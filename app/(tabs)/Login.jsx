import { View, Text, StyleSheet, TouchableOpacity, Image, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeData } from "../../CONST";

const { providersLogoPath, backgroundcolorProvider, textColorProvider, elementsColorProvider } = themeData


export default function Login() {
  const theme = useColorScheme()

  const apple = providersLogoPath[theme].apple
  const facebook = providersLogoPath[theme].facebook
  const google = providersLogoPath[theme].google
  const back = providersLogoPath[theme].back
  return (

    <SafeAreaView style={[styles.container, { backgroundColor: backgroundcolorProvider[theme] }]}>

      <View style={styles.logo}>
      </View>
      <Text style={{ fontSize: 40, textAlign: 'center', marginTop: '10%', color: textColorProvider[theme] }}>
        Welcome!
      </Text>

      <View style={styles.providerHolder}>

        <TouchableOpacity style={[styles.providers, { backgroundColor: elementsColorProvider[theme] }]}>
          <Image style={styles.providersLogos} source={facebook} />
          <Text style={{ color: 'white', alignSelf: 'center', fontSize: 17 }}>Continue with Facebook</Text>
          <Image style={styles.providersLogos} source={back} />

        </TouchableOpacity>

        <TouchableOpacity style={[styles.providers, { backgroundColor: elementsColorProvider[theme] }]}>
          <Image style={styles.providersLogos} source={google} />
          <Text style={{ color: 'white', alignSelf: 'center', fontSize: 17 }}>Continue with Google</Text>
          <Image style={styles.providersLogos} source={back} />

        </TouchableOpacity>

        <TouchableOpacity style={[styles.providers, { backgroundColor: elementsColorProvider[theme] }]}>
          <Image style={styles.providersLogos} source={apple} />
          <Text style={{ color: 'white', alignSelf: 'center', fontSize: 17 }}>Continue with Apple</Text>
          <Image style={styles.providersLogos} source={back} />

        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    marginTop: '20%',
    alignSelf: 'center',
    backgroundColor: 'gray',
    width: '40%',
    height: '20%'
  },
  providerHolder: {
    marginTop: 30,

  },
  providers: {
    width: '80%',
    borderRadius: 30,
    height: '12%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'start',
    marginTop: '10%',

  },
  providersLogos: {
    height: '97%',
    marginLeft: '-1%',
    resizeMode: 'contain'
  }

})
