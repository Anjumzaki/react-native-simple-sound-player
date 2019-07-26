import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Sound from 'react-native-sound';
import { Card, Icon,Divider } from 'react-native-elements'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';

export default class MovieList extends Component {

  state = {
    playing: false,
    allSongs: [new Sound('iphone.mp3'), new Sound('cat.mp3'), new Sound('afara.mp3')],
    songIndex: null
  }
  playSound = () => {
    this.setState({
      playing: true
    }, () => this.state.allSongs[this.state.songIndex].play())
   
  }
  stopSound = () => {
    this.state.allSongs[this.state.songIndex].setCurrentTime(0.0)
    this.setState({
      playing: false
    }, () =>  this.state.allSongs.map((item, key) =>{
      item.pause()
      item.setCurrentTime(0.0)}
    ))
  }
  render() {
        const goToAbout = () => {
           Actions.about()
    }
    return (   
      <ScrollView>
      <View style={style.container}>
        {/* <View style={style.ImageContainer}>
          <ImageBackground source={apple} style={style.apple}>
            <TouchableOpacity style={style.bellTouch}>
              <Image source={bell} style={style.bell} />
            </TouchableOpacity>
            <TouchableOpacity style={style.border} onPress={this.state.playing ? () =>  this.setState({ songIndex: 0 }, this.stopSound) : () => this.setState({ songIndex: 0 }, this.playSound)}>
              <Image source={this.state.playing && this.state.songIndex == 0 ? on : off} style={style.image} />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={style.ImageContainer}>
          <ImageBackground source={apple} style={style.apple}>
            <TouchableOpacity style={style.bellTouch}>
              <Image source={bell} style={style.bell} />
            </TouchableOpacity>
            <TouchableOpacity style={style.border} onPress={this.state.playing ? () => this.setState({ songIndex: 1 }, this.stopSound) : () => this.setState({ songIndex: 1 }, this.playSound)}>
              <Image source={this.state.playing && this.state.songIndex == 1 ? on : off} style={style.image} />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={style.ImageContainer}>
          <ImageBackground source={apple} style={style.apple}>
            <TouchableOpacity style={style.bellTouch}>
              <Image source={bell} style={style.bell} />
            </TouchableOpacity>
            <TouchableOpacity style={style.border} onPress={this.state.playing ? () => this.setState({ songIndex: 2 }, this.stopSound) : () => this.setState({ songIndex: 2 }, this.playSound)}>
              <Image source={this.state.playing && this.state.songIndex == 2 ? on : off} style={style.image} />
            </TouchableOpacity>
          </ImageBackground>
        </View> */}
        {/* <Card
  title='CARD WITH DIVIDER'>
    <View>
    <ListItem
     roundAvatar  title='The idea with React Native Elements'  avatar={require('./bell.png')}/>

      <Text style={{marginBottom: 10}}>
     is more about component structure than actual design.
    </Text>
  
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Set as Ringtone' />
    </View>
  
</Card> */}

        <Card style={style.ca} title="Cat Sounds">
          <Grid>
            <Row>
            <Col size={1}>
              <TouchableOpacity onPress={this.state.playing ? () =>  this.setState({ songIndex: 0 }, this.stopSound) : () => this.setState({ songIndex: 0 }, this.playSound)}>
              <Icon
              raised
              name={this.state.playing && this.state.songIndex == 0 ?'pause-circle' : 'play-circle'}
              type='font-awesome'
              color='black' />
              </TouchableOpacity>
              </Col>
            <Col size={2}><Text style={style.te}>dadwadwasdwd</Text></Col>
            <Col size={1}><Icon
              raised
              name='bell'
              type='font-awesome'
              color='black' /></Col>
              </Row>
              <Divider style={{ backgroundColor: 'silver' }} />
              <Row>
            <Col size={1}>
              <TouchableOpacity onPress={this.state.playing ? () =>  this.setState({ songIndex: 1 }, this.stopSound) : () => this.setState({ songIndex: 1 }, this.playSound)}>
              <Icon
              raised
              name={this.state.playing && this.state.songIndex == 1 ?'pause-circle' : 'play-circle'}
              type='font-awesome'
              color='black' />
              </TouchableOpacity>
              </Col>
            <Col size={2}><Text style={style.te}>dadwadwasdwd</Text></Col>
            <Col size={1}><Icon
              raised
              name='bell'
              type='font-awesome'
              color='black' /></Col>
              </Row>
              <Divider style={{ backgroundColor: 'silver' }} />
              <Row>
            <Col size={1}>
              <TouchableOpacity onPress={this.state.playing ? () =>  this.setState({ songIndex: 2 }, this.stopSound) : () => this.setState({ songIndex: 2 }, this.playSound)}>
              <Icon
              raised
              name={this.state.playing && this.state.songIndex == 2 ?'pause-circle' : 'play-circle'}
              type='font-awesome'
              color='black' />
              </TouchableOpacity>
              </Col>
            <Col size={2}><Text style={style.te}>dadwadwasdwd</Text></Col>
            <Col size={1}><Icon
              raised
              name='bell'
              type='font-awesome'
              color='black' /></Col>
              </Row>
              <Divider style={{ backgroundColor: 'silver' }} />
          </Grid>
        </Card>

      </View>
      </ScrollView>
    )
  }
}

const style = {
  image: {
    width: 27,
    height: 20,
    flex: 1,
  },
  ca: {
    flex: 1,
    margin: 0,
  },
  te: {
    paddingTop: 20,
    textAlign: 'center'
  },
  user: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'white'
  },
  border: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 100,
    alignSelf: 'center',
    top: 50,
  },
  ImageContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  apple: {
    height: 150,
  },
  bell: {
    height: 30,
    width: 30,
    left: 275,
    top: 10,
  },
  cImg: {
    width: 300,
    height: 300
  }
}