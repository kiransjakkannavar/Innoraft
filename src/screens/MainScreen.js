import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Platform } from 'react-native'
import { custom } from '../constants'

export default class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Welcome to Innoraft Team </Text>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Dashboard")}>
                    <Text style={styles.text}>Press here</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        height: 60,
        width: custom.sizes.width - 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: Platform.OS == 'android' ? 5 : 0,
        borderColor: '#000',
        backgroundColor: 'green',
        borderRadius: 26,
        marginTop: 20
    }
})
