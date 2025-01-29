import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, View, Text, useColorScheme } from 'react-native';
import Search from './Search.jsx';
import Catalog from './Catalog.jsx';
import { themeData } from '../../../CONST.js';

export default function Dashboard() {
    const theme = useColorScheme()
    const { backgroundcolorProvider, elementsColorProvider } = themeData

    return (
        <View style={{ flex: 1, backgroundColor: backgroundcolorProvider[theme] }}>
            <Search componentsTheme={elementsColorProvider[theme]} />
            <Catalog componentsTheme={elementsColorProvider[theme]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '50%',
    },

});
