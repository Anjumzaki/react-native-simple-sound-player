import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button,Icon } from 'react-native-elements'

const About = () => {
    const goToHome = () => {
        Actions.home()
    }
    return (
       
                    
                        <Button onPress={goToHome} 
                         title="Get Started"
                            icon={<Icon name='arrow-circle-right' type='font-awesome' color='#ffffff' />}
                            backgroundColor='#03A9F4' />
                  
    )
}
export default About