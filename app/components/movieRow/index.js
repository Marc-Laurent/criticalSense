import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Cover from '../cover'

const CoverContainer = styled.View``

const MovieRowContainer = styled.View`
  border-radius: 4px;
  box-shadow: 1px 1px 2px black;
  background-color: #FFF;
  border-color: #e50914;
  height: 75px;
  flex-direction: row;
  margin: 6px 12px;
  padding: 5px;
`

const InfoContainer = styled.View`
  margin-left: 12px;
  flex: 1;
`

const SummaryContainer = styled.View`
  margin-left: 12px;
  flex: 2;
`

export default class MovieRow extends React.Component {
  static propTypes = {
    movie: PropTypes.object,
    navigation: PropTypes.object
  }

  handleMovieNavigation = movieData => {
    this.props.navigation.navigate('MovieDetail', {
      movieData: { ...movieData },
      itemId: movieData.name
    })
  }

  render() {
    const { title, small_cover_image, year, rating, genres } = this.props.movie
    return (
      <TouchableOpacity
        onPress={() => this.handleMovieNavigation(this.props.movie)}
      >
        <MovieRowContainer>
          <CoverContainer>
            <Cover size={40} source={{ uri: small_cover_image }} />
          </CoverContainer>
          <InfoContainer>
            <Text>{title}</Text>
          </InfoContainer>
          <SummaryContainer>
            <Text>Année de sortie   {year ? year.toString() : ""}</Text>
            <Text>Note : {rating ? rating.toString() : ""}</Text>
            <Text>Genres : {genres ? genres.toString() : ""}</Text>
          </SummaryContainer>
        </MovieRowContainer>
      </TouchableOpacity>
    )
  }
}
