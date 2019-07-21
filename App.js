import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Sound from 'react-native-sound';

export default class MovieList extends Component {

    sound = new Sound('motorcycle.mp3');

    playSound = () => {
        this.sound.play()
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.playSound}>
                    <View>
                        <Text>Start</Text>
                    </View>
                </TouchableOpacity>
                <Text>Start</Text>
                <Text>Start</Text><Text>Start</Text><Text>Start</Text>
            </View>
        )
    }
}