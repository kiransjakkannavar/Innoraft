import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { View, Text, ImagePropTypes } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { custom } from '../constants'
import MainScreen from '../screens/MainScreen'
import Dashboard from '../screens/Dashboard'
import Details from '../screens/Details'



const AppStackNavigator = createStackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    backgroundColor: '#ecececec',
                    borderBottomColor: "#efefef",
                    elevation: 10, // for android,
                },
                // headerTransparent: true,
                headerLeft: () => (
                    <Icon name="ios-menu-outline" size={24} />
                ),
                headerRight: () => (
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Icon name="ios-notifications" size={24} />
                        <Icon name="ios-settings" size={24} />
                    </View>
                ),
                headerTitle: "Innoraft",
                headerTitleStyle: {
                    fontSize: 18, color: "#000", left: '40%'
                },
                headerLeftContainerStyle: {
                    paddingLeft: 24
                },
                headerRightContainerStyle: {
                    paddingRight: 24
                },
            }
        }
    },
    Details: {
        screen: Details,
        navigationOptions: ({ navigation }) => {
            return {

                headerTransparent: true,
                headerLeft: () => (
                    <Icon name="ios-arrow-back-circle-sharp" size={26} onPress={() => navigation.goBack()} />
                ),
                headerTitle: "Burger",
                headerTitleStyle: {
                    fontSize: 18, color: "#000",
                    alignSelf: 'center'
                },
                headerLeftContainerStyle: {
                    paddingLeft: 24
                },
                headerRightContainerStyle: {
                    paddingRight: 24
                },
            }
        }
    }
})

const RootStack = createSwitchNavigator({
    Main: {
        screen: MainScreen
    },
    DashboardStack: {
        screen: AppStackNavigator
    }
}, {
    initialRouteName: 'Main'
})

const Navigation = createAppContainer(RootStack)

export default Navigation