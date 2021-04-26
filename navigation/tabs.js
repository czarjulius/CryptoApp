import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import LinearGradient from 'react-native-linear-gradient'

import { Home } from "../screens"
import { COLORS, FONTS, icons } from "../constants"

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel:false,
                style:{
                    position: 'absolute',
                    bottom:0,
                    left:0,
                    right:0,
                    elevation:0,
                    backgroundColor: COLORS.white,
                    borderTopColor: 'transparent',
                    height: 100
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Portfolio"
                component={Home}
            />
            <Tab.Screen
                name="Transaction"
                component={Home}
            />
            <Tab.Screen
                name="Prices"
                component={Home}
            />
            <Tab.Screen
                name="Settings"
                component={Home}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;