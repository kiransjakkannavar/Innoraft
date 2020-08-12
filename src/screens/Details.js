import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { custom } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Details extends Component {



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.photo} source={{ uri: 'https://tutofox.com/foodapp//food/burger/burger-5.png' }} />
                    <View style={styles.buttonContainer}>

                        <TouchableOpacity style={styles.innerContainer}>

                            <Text>Order Now</Text>
                            <Icon style={{ paddingLeft: 5 }} name="heart" size={18} color="red" />

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.innerContainer}>

                            <Text>Add to Favourites</Text>
                            <Icon style={{ paddingLeft: 5 }} name="heart" size={18} color="red" />

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.content}>
                    <Text style={{ alignSelf: 'flex-start', paddingLeft: 20, fontWeight: 'bold', fontSize: 22 }}>Veg Burger</Text>

                    <Text style={{ alignSelf: 'flex-start', paddingLeft: 20, fontSize: 20 }}>
                        It is a Veg Burger with specially added cheese and toasted spicy chillies, which adds an authentic taste to it !!!
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        width: custom.sizes.width,
        height: custom.sizes.height / 2,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        borderColor: '#000',
        borderWidth: 1,
        alignItems: 'center'

    },
    photo: {
        width: custom.sizes.width,
        height: custom.sizes.height / 2,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    buttonContainer: {
        width: custom.sizes.width - 40,
        height: 50,
        position: 'absolute',
        bottom: -20,
        flexDirection: 'row'
    },
    innerContainer: {
        width: '40%',
        flex: 1,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey'
    },
    content: {
        marginTop: 20,
        flex: 1
    }
})
