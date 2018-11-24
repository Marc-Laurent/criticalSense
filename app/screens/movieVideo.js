import React, { Component } from 'react'
import { StyleSheet, View, Text, WebView } from 'react-native'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const BackgroundView = styled.View`
  flex: 1;
  justify-content: center;
`
const Content = styled.View`
  flex: 1;
`

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
})

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

  render() {
    const { movieData } = this.state

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
