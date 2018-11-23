import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'

import WebTorrent from 'webtorrent/webtorrent.min'

import styled from 'styled-components'

const BackgroundView = styled.View`
  background-color: #000;
  flex: 1;
  justify-content: center;
`
const Content = styled.View`
  background-color: #000;
  flex: 3;
`

const Header = styled.View`
  align-items: center;
  background-color: #000;
  flex: 1;
  justify-content: center;
`

const textAlert = {
  fontSize: 20,
  textAlign: 'center',
  fontWeight: 'bold',
  color: "#e50914"
}

export default class MovieVideo extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }
  state = {
    movies: null
  }

  componentDidMount() {

    const { navigation } = this.props
    this.setState({
      movieData: navigation.getParam('movieData')
    })
  }

  torrentGet = hash => {
    console.log("hash ==========", hash);
     if(hash){
       const client = new WebTorrent()
       console.log("client ==========", client);

       const magnetURI = `magnet:?xt=urn:btih:${hash}`
       console.log("client ==========", magnetURI);

       client.add(magnetURI, torrent => {
         // Got torrent metadata!
         console.log('Client is downloading:', torrent)

         torrent.files.map(file => {
           // Display the file by appending it to the DOM. Supports video, audio, images, and
           // more. Specify a container element (CSS selector or reference to DOM node).
           console.log("FILE ============= ", file)

           return file
         })
       })
     }else {
       return

     }
   }

  keyExtractor = item => item.name

  render() {
    const { movieData } = this.state
    const hash = movieData && movieData.torrents && movieData.torrents[0] && movieData.torrents[0].hash ? movieData.torrents[0].hash : null

    return (
      <BackgroundView>
        <Header></Header>
        {this.state.movieData ? (
          <Content>
            <Text style={textAlert}>Work</Text>
          </Content>
        ) : (
          <Content>
            <Text style={textAlert}>Pas de donnée</Text>
          </Content>
        )}
      </BackgroundView>
    )
  }
}
