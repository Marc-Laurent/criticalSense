import { Button, Text } from 'react-native'
import axios from 'axios'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import MovieSuggestContainer from '../components/movieSuggest'

const BackgroundView = styled.View`
  background-color: #000;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const MovieSuggestContainer = styled.View`
  background-color: #FFF;
  height: 125px;
  flex-direction: row;
`

const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
`

export default class App extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }
  state = {
    movies: null,
    page_number: 1
  }
  // handle navigation
  handleMoviesButtonPress = movies => {
    this.props.navigation.navigate('Movies', {
      movies: { ...movies },
      itemId: this.state.page_number.toString()
    })
  }

  handleParameterButtonPress = movies => {
    this.props.navigation.navigate('Search', {
      movies: { ...movies },
      itemId: this.state.page_number.toString()
    })
  }

  componentDidMount() {
    axios
      .post('https://yts.am/api/v2/list_movies.json?limit=50&page=1')
      .then(result =>
          this.setState({ movies: result && result.data && result.data.data && result.data.data.movies ?   result.data.data.movies : null })
      )
  }

  render() {
    const { movies } = this.state
    console.log(movies)
    return (
      <BackgroundView>
        {this.state.movies ? (
          <ButtonContainer>
            <Button color="#e50914"  title="Recherche" onPress={this.handleParameterButtonPress} />
            <Button color="#e50914"  title="Films" onPress={this.handleMoviesButtonPress} />
          </ButtonContainer>

          <MovieSuggestContainer>
            <Text>test</Text>
          </MovieSuggestContainer>
        ) : (
          <Text>No data available</Text>
        )}
      </BackgroundView>
    )
  }
}
