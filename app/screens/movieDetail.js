import { Text, ScrollView, Button, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Cover from '../components/cover'
import MovieDetailContainer from '../components/movieDetail'

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

export default class MovieDetail extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  state = {
    movieData: null
  }

  handleMovieViewNavigationPress = movieData => {
    this.props.navigation.navigate('MovieVideo', {
      movieData: { ...movieData },
      itemId: movieData.torrents
    })
  }

  componentDidMount() {
    const { navigation } = this.props
    this.setState({
      movieData: navigation.getParam('movieData')
    })
  }

  render() {
    const navigation = this.props
    const { movieData } = this.state
    return (
      <BackgroundView>
        <Header>
          {this.state.movieData ? (
            <Cover source={{ uri: movieData.medium_cover_image }} resizeMode="center" />
          ) : null}
        </Header>
        {this.state.movieData ? (
          <MovieDetailContainer movie={movieData} navigation={navigation} handleMovieViewNavigationPress={this.handleMovieViewNavigationPress} />
        ) : (
          <Content>
            <Text>Pas de donnée</Text>
          </Content>
        )}
      </BackgroundView>
    )
  }
}
