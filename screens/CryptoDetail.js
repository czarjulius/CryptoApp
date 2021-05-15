import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
    ScrollView,
    Animated
} from 'react-native';

import {HeaderBar } from '../components'
import {dummyData, COLORS, SIZES, FONTS, icons, images} from '../constants'

const CryptoDetail = ({ navigation }) => {

    function renderChart(){
        return(
            <View style={{
                marginTop: SIZES.padding,
                marginHorizontal:SIZES.radius,
                
            }}>

            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex:1,
                backgroundColor: COLORS.lightGray1
            }}
        >
            <HeaderBar right={true}/>

            <ScrollView>
                <View style={{flex: 1, paddingBottom: SIZES.padding}}> {renderChart()} </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default CryptoDetail;