import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

let Header = ({
    backHandler,
    headerTitle
}) => {
    return (
        <View style={styles._header_main}>
            <TouchableOpacity style={styles._header_back} onPress={backHandler}>
                <Ionicons name="chevron-back" size={30} color="#000" />
            </TouchableOpacity>
            <Text style={styles._header_title}>{headerTitle}</Text>
            <View style={styles._header_back} />
        </View>
    )
}
let styles = StyleSheet.create({
    _header_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 5
    },
    _header_back: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    _header_title: {
        color: "#000",
        fontSize: 18,
        fontWeight: "bold"
    }
})
export default Header