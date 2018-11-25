import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import Cover from '../cover'
import MovieLike from '../movieLike'

const CoverContainer = styled.View`
  flex: 1;
`

const MovieRowContainer = styled.View`
  border-radius: 4px;
  box-shadow: 1px 1px 2px black;
  background-color: #e50914;
  border-color: #e50914;
  height: 100px;
  flex-direction: row;
  margin: 6px 12px;
  padding: 5px;
`

const TextContainer = styled.View`
  flexDirection: column;
  justifyContent: center;
  alignItems: stretch;
`

const InfoContainer = styled.View`
  margin-left: 6px;
  flex: 2;
`

const SummaryContainer = styled.View`
  margin-left: 6px;
  flex: 2;
`

const styles = StyleSheet.create({
  TitleStyle: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 0
  },
  TextStyle: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 2
  }
})

export default class MovieRow extends Component<{}> {
  static propTypes = {
    movie: PropTypes.object,
    navigation: PropTypes.object
  }

  handleMovieNavigation = movieData => {
    this.props.navigation.navigate('MovieDetail', {
      movieData: { ...movieData },
      itemId: movieData.title
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
            <Cover source={{ uri: small_cover_image }} />
          </CoverContainer>
          <TextContainer>
            <InfoContainer>
              <Text style={styles.TitleStyle} >{title}</Text>
            </InfoContainer>
            <SummaryContainer>
              <Text style={styles.TextStyle} >Année de sortie   {year ? year.toString() : ""}</Text>
              <Text style={styles.TextStyle} >Note : {rating ? rating.toString() : ""}</Text>
            </SummaryContainer>
          </TextContainer>
        </MovieRowContainer>
        <MovieLike movie={this.props.movie} />
      </TouchableOpacity>
    )
  }
}
