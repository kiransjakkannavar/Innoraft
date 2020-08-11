import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import { custom } from '../constants';


const RECIPE_ITEM_HEIGHT = 150;

class Dashboard extends Component {

    renderRecipes = ({ item }) => {
        return (
            <View style={styles.card}>
                <Image style={styles.photo} source={{ uri: item.photo_url }} />
                <Text style={styles.title}>{item.name}</Text>
            </View>
        )
    }

    itemSeparator = () => {
        return (
            <View style={{ height: 10 }} />
        )
    }

    headerComponent = () => {
        return (
            <View style={{ alignItems: 'center', height: 50 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>List Of Receipes</Text>
            </View>
        )
    }

    render() {
        const { recipes } = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    vertical
                    showsVerticalScrollIndicator={false}
                    data={recipes}
                    renderItem={this.renderRecipes}
                    keyExtractor={(item) => `${item.id}`}
                    ItemSeparatorComponent={this.itemSeparator}
                    ListHeaderComponent={this.headerComponent}
                />
            </View>
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
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: custom.sizes.width,
        height: RECIPE_ITEM_HEIGHT + 75,
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 15
    },
    photo: {
        width: custom.sizes.width - 20,
        height: RECIPE_ITEM_HEIGHT,
        borderRadius: 15
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444444',
        marginTop: 3,
        marginRight: 5,
        marginLeft: 5,

    }
})
