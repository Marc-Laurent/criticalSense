import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions, WebView } from 'react-native'
import PropTypes from 'prop-types'

import WebTorrent from 'webtorrent/webtorrent.min'

import styled from 'styled-components'

const BackgroundView = styled.View`
  flex: 1;
  justify-content: center;
`
const Content = styled.View`
  flex: 1;
`

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textAlert: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: "#e50914"
  }
});

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
    const yt_trailer_code =  movieData && movieData.yt_trailer_code ? movieData.yt_trailer_code : null
    const linkYoutube = `https://www.youtube.com/watch?v=${yt_trailer_code}`

    return (
      <BackgroundView>
        {this.state.movieData && this.state.movieData.yt_trailer_code ? (
          <Content>
            <WebView
              style = {styles.backgroundVideo}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{uri: linkYoutube }}
            />
          </Content>
        ) : (
          <Content>
            <Text style={styles.textAlert}>Pas de donnée</Text>
          </Content>
        )}
      </BackgroundView>
    )
  }
}
