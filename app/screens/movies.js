import { Text } from 'react-native'
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

export default class Movies extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }
  state = {
    movies: null
  }

  componentDidMount() {
    const { navigation } = this.props
    this.setState({
      movies: navigation.getParam('movies')
    })
  }

  keyExtractor = item => item.id.toString()

  render() {
    const { navigation } = this.props
    const { movies } = this.state
    console.log(this.state)
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
          <Text>No data available</Text>
        )}
      </BackgroundView>
    )
  }
}
