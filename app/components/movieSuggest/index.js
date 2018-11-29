import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import Cover from '../cover'
import MovieLike from '../movieLike'
import MovieRow from '../movieRow'

const CoverContainer = styled.View`
  flex: 1;
`

const MovieSuggestContainer = styled.View`
  border-radius: 4px;
  box-shadow: 1px 1px 2px black;
  background-color: #e50914;
  border-color: #e50914;
  height: 125px;
  flex-direction: row;
  margin: 6px 12px;
  padding: 5px;
`

export default class MovieSuggest extends Component<{}> {
  static propTypes = {
    movies: PropTypes.object
  }

  keyExtractor = item => item.id.toString()

  render() {
    const { movies } = this.props
    return (
      <MovieSuggestContainer>
        {movies ? (
          <StyledFlatList
            data={movies}
            keyExtractor={this.keyExtractor}
            renderItem={({ item }) => (
              <MovieRow movie={item} navigation={navigation} />
            )}
          />
        ) : (
          <Text>No data available</Text>
        )}
      </MovieSuggestContainer>
        {movies ? (
          <MovieSuggestContainer
            data={movies}
            keyExtractor={this.keyExtractor}
            renderItem={({ item }) => (
              <MovieRow movie={item} navigation={navigation} />
            )}
          />
        ) : (
          <Text>No data available</Text>
        )}
    )
  }
}
