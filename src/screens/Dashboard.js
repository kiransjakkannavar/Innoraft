import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { custom } from '../constants';
import Swiper from 'react-native-swiper'


const banner = [
    "http://tutofox.com/foodapp//banner/banner-1.jpg",
    "http://tutofox.com/foodapp//banner/banner-2.jpg",
    "http://tutofox.com/foodapp//banner/banner-3.png"
]

const categories = [
    {
        id: 1,
        name: "American",
        color: "#fbc831",
        image: "http://tutofox.com/foodapp//categories/american.png"
    },
    {
        id: 2,
        name: "Burger",
        color: "#9fd236",
        image: "http://tutofox.com/foodapp//categories/burger.png"
    },
    {
        id: 3,
        name: "Pizza",
        color: "orange",
        image: "http://tutofox.com/foodapp//categories/pizza.png"
    },
    {
        id: 4,
        name: "Drink",
        color: "#f2f2f2",
        image: "http://tutofox.com/foodapp//categories/drink.png"
    }
]

class Dashboard extends Component {

    renderRecipes = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                <View style={styles.card}>
                    <Image style={styles.photo} resizeMode="contain" source={{ uri: item.image }} />
                    <Text style={styles.title}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    itemSeparator = () => {
        return (
            <View style={{ width: 2 }} />
        )
    }


    render() {
        // const { recipes } = this.props
        return (
            <ScrollView style={styles.container}>
                <Text style={{ fontSize: 16, color: 'grey', marginHorizontal: 20, marginVertical: 10 }}>Welcome to Innoraft Food Menu</Text>
                <Text style={{ fontSize: 26, color: '#000', marginHorizontal: 20, fontWeight: 'bold', marginVertical: 2 }}>Pritam !</Text>
                <Swiper style={{ height: custom.sizes.width / 2, alignItems: 'center', justifyContent: 'center' }} showsButtons={false} autoplay={true} autoplayTimeout={2}>
                    {
                        banner.map((itembann) => {
                            return (
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image style={styles.imageBanner} resizeMode="contain" source={{ uri: itembann }} />
                                </View>
                            )
                        })
                    }
                </Swiper>
                <Text style={{ fontSize: 22, color: '#000', marginHorizontal: 20, fontWeight: 'bold', marginVertical: 2 }}>Popular Categories</Text>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    renderItem={this.renderRecipes}
                    keyExtractor={(item) => `${item.id}`}
                    ItemSeparatorComponent={this.itemSeparator}
                />

            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.category.category, 'props')
    return {
        recipes: state.category.category
    }
}

export default connect(mapStateToProps)(Dashboard)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBanner: {
        height: custom.sizes.height / 2,
        width: custom.sizes.width - 40,
        borderRadius: 10,
        marginHorizontal: 20
    },
    card: {
        flex: 1,
        width: custom.sizes.width / 3,
        height: custom.sizes.height / 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: '#ececec',
        marginLeft: 20
    },
    photo: {
        flex: 1,
        width: custom.sizes.width / 3,
        height: custom.sizes.height / 3 - 30
    },
    title: {
        paddingLeft: 20,
        alignSelf: 'flex-start',
        fontSize: 14,
        fontWeight: 'bold'
    }
})
