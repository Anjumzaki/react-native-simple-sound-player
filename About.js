import React from 'react'
import { TouchableOpacity, Text, View, Image, ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button, Icon } from 'react-native-elements';
import cat from './cat.png';
import {BoxShadow} from 'react-native-shadow';

const About = () => {
    const goToHome = () => {
        Actions.home()
    }
    const image = {
        width:150,
        height:150,
        color:"#000",
        border:5,
        radius:5,
        opacity:0.3,
        x:4,
        y:4,
        style:{marginVertical:5}
    }
    const buttonShadow = {
        width:150,
        height:40,
        color:"#000",
        border:5,
        radius:5,
        opacity:0.3,
        x:4,
        y:4,
        style:{marginVertical:5}
    }
    const style = {
        container: {
            flex: 1,
            backgroundColor: 'silver',
        },
        image: {
            width: 150,
            height: 150,
            borderWidth: 1,
            borderColor: 'green',
            padding: 50,
            backgroundColor: 'green',
            shadowOffset: { width: 10, height: 10, },
            shadowColor: 'black',
            shadowOpacity: 1,
        },
        containers: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 125,
        },
    }
    return (
        <View style={style.container}>
            <View style={style.containers}>
            <BoxShadow setting={image}>
                <Image source={cat} style={style.image} />
            </BoxShadow>
            </View>
            <View style={style.containers}>
            <BoxShadow setting={buttonShadow}>
                <Button onPress={goToHome}
                    title=" Get Started"
                    icon={<Icon name='arrow-circle-right' type='font-awesome' color='#ffffff' />}
                    backgroundColor='#03A9F4' />
            </BoxShadow>
            </View>
        </View>
    )
}
export default About