import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Header from './../../components/header'
let SmartFi = () => {
    return (
        <SafeAreaView style={styles._container}>
            <StatusBar
                hidden={false}
                backgroundColor="#fff"
                translucent={false}
                barStyle="dark-content"
            />
            <Header backHandler={() => alert("comming soon")} headerTitle="Smart FI" />
            <ScrollView>
                <View style={styles._header_tips_mian}>
                    <Text>Tips & Tricks</Text>
                    <TouchableOpacity>
                        <Text>View All</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
let styles = StyleSheet.create({
    _container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
    },
    _header_tips_mian: {
        backgroundColor: "#f8f8f8",
        marginTop: 20,
        paddingVertical: 10 
    }
})
export default SmartFi