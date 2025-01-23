import { Image, SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native"
import { themeData } from "../../../CONST"

export default function Search({ componentsTheme }) {
    const { homeSearchImages } = themeData
    return (
        <SafeAreaView style={[styles.SearchContainer, { backgroundColor: componentsTheme }]}>

            <Image style={styles.toggle} source={homeSearchImages.toggle} />
            <Text style={{ fontSize: 40, textAlign: 'center', fontWeight: '600' }}>
                Lorem, ipsum.
            </Text>
            <Text style={{ textAlign: 'center', marginTop: '20', width: '80%', alignSelf: 'center' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sapiente illum quam modi libero.
            </Text>

            <View style={{ flexDirection: 'row', backgroundColor: 'white', width: '85%', alignSelf: 'center', marginTop: '25', borderRadius: 14 }}>
                <Image style={styles.search} source={homeSearchImages.search} />
                <TextInput style={{ fontSize: 15, textAlign: 'start', }}>Search...</TextInput>
            </View>

            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 4 }}>
                <Image style={styles.someicon} source={homeSearchImages.someicon} />
                <Text style={{ textAlign: 'center', fontSize: 28, fontWeight: '600', alignSelf: 'center' }}>
                    Lorem ipsum
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    SearchContainer: {
        width: '100%',
        height: '50%',
        paddingTop: 20,
        borderBottomRightRadius: '10%',
        borderBottomLeftRadius: '10%'

    },
    toggle: {
        width: 50,
        height: 50,
        padding: 10,
        margin: 15
    },
    search: {
        width: 20,
        height: 20,
        margin: 10
    },
    someicon: {
        marginLeft: '-10%',
        margin: 10,
        width: '10%',
        objectFit: 'contain',
    }

});

