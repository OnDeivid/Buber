import { SafeAreaView, StyleSheet, View, Text } from "react-native";

export default function Card({ name, car, availability, componentsTheme }) {
    return (
        <View style={[styles.container, { backgroundColor: componentsTheme }]}>
            <View style={styles.header}>
            </View>
            <View style={styles.infoHolder}>
                <Text style={styles.nameText}>
                    {name}
                </Text>
                <Text style={styles.carText}>
                    {car}
                </Text>
                <View style={styles.availabilityContainer}>
                    <View style={styles.statusCircle}></View>
                    <Text style={styles.availabilityText}>
                        {availability}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        width: '45%',
        height: '80%',
        marginHorizontal: 10,
        marginVertical: 20,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'blue',

    },
    header: {
        width: '100%',
        height: 130,
        marginTop: -10,
        backgroundColor: '#F5F5DC',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 5,
    },
    infoHolder: {
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    nameText: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 20,
    },
    carText: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 18,
    },
    availabilityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingBottom: 15

    },
    statusCircle: {
        backgroundColor: 'white',
        height: 13,
        width: 13,
        borderRadius: 7,
        marginTop: -10
    },
    availabilityText: {
        marginLeft: 7,
        color: 'white',
        fontSize: 16,
        marginTop: -10,

    },
});
