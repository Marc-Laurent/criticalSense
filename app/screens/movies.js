import { Text, ActivityIndicator, View, StyleSheet } from 'react-native'
import axios from 'axios'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import MovieRow from '../components/movieRow'

const BackgroundView = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #000;
`

const StyledFlatList = styled.FlatList``



const styles = StyleSheet.create({
  containerLoad: {
   flex: 1,
   justifyContent: 'center'
 },
 horizontalContent: {
   flexDirection: 'row',
   justifyContent: 'space-around',
   padding: 10
 }
})


export default class Movies extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }
  state = {
    movies: null
  }

  componentDidMount() {
    axios
      .post('https://yts.am/api/v2/list_movies.json?limit=50&page=1')
      .then(result =>
          this.setState({ movies: result && result.data && result.data.data && result.data.data.movies ?   result.data.data.movies : null })
      )
  }

  keyExtractor = item => item.id.toString()

  render() {
    const { navigation } = this.props
    const { movies } = this.state
    return (
      <BackgroundView>
        {movies ? (
          <StyledFlatList
            data={movies}
            keyExtractor={this.keyExtractor}
            renderItem={({ item }) => (
              <MovieRow movie={item} navigation={navigation} />
            )}
          />
        ) : (
          <View style={[styles.containerLoad, styles.horizontalContent]}>
            <ActivityIndicator size="large" color="#e50914" />
          </View>
        )}
      </BackgroundView>
    )
  }
}
