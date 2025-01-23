import { SafeAreaView, FlatList, StyleSheet, View, Text } from 'react-native';
import Card from '../../../components/Card.jsx'

export default function Catalog({ componentsTheme }) {
    const data = [
        { id: '1', name: 'Kiro Petrov', car: 'Passat 5', availability: 'Available now' },
        { id: '2', name: 'Maria Ivanova', car: 'Toyota Corolla', availability: 'Busy' },
        { id: '3', name: 'Georgi Dimitrov', car: 'BMW X5', availability: 'Available now' },
        { id: '4', name: 'John Doe', car: 'Audi A4', availability: 'Busy' },
        { id: '5', name: 'Jane Smith', car: 'Tesla Model 3', availability: 'Available now' },
        { id: '6', name: 'Peter Parker', car: 'Ford Mustang', availability: 'Busy' },
        { id: '7', name: 'Bruce Wayne', car: 'Batmobile', availability: 'Available now' },
        { id: '8', name: 'Clark Kent', car: 'Chevrolet Impala', availability: 'Busy' },
        { id: '9', name: 'Diana Prince', car: 'Honda Civic', availability: 'Available now' },
        { id: '10', name: 'Barry Allen', car: 'Ford Focus', availability: 'Busy' },
    ];

    const renderItem = ({ item }) => (
        <Card name={item.name} componentsTheme={componentsTheme} car={item.car} availability={item.availability} />
    );
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ color: '#DFEDFB', fontSize: 20, textAlign: 'start', margin: 15, fontWeight: '800' }}>Currently Avaiable</Text>
            <FlatList
                numColumns={2}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListFooterComponent={<View style={{ height: 30, width: 200, }}></View>}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '45%',
    },
})