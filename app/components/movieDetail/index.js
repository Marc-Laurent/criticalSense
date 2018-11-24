import { Text, ScrollView, Button, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import React, { Component } from 'react';
import styled from 'styled-components'

const MovieDetailContent = styled.View`
  background-color: #000;
  flex: 3;
`

const Summarycontainer = styled.View`
  flexGrow: 1;
  height: 150px;
  margin-bottom: 10px;
  flex: 1;
`

const styles =  StyleSheet.create({
  textTitleStyle: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textSummaryStyle: {
    color: '#FFF',
    marginBottom: 12,
    fontSize: 18
  },
  textStyle: {
    color: '#FFF',
    marginBottom: 12,
    fontSize: 16
  }
})

export default class MovieDetailContainer extends Component<{}> {
  static propTypes = {
    movie: PropTypes.object,
    navigation: PropTypes.object,
    handleMovieViewNavigationPress: PropTypes.object
  }

  qualityGet = torrents => {
     const qualities = []

     torrents.map( torrent =>
       qualities.push(torrent.quality)
     )

     return qualities.toString()
  }

  render() {
    const { title, year, summary, language, rating, torrents, genres } = this.props.movie

    return (
      <MovieDetailContent>
        <Text style={styles.textTitleStyle}>{title}</Text>
        <Text>Année de sortie   {year ? year.toString() : ""}</Text>
        <Text style={styles.textSummaryStyle}>Résumé :</Text>
        <Summarycontainer>
          <ScrollView>
            <Text style={styles.textStyle}>{summary}</Text>
          </ScrollView>
        </Summarycontainer>
        <Button color="#e50914"  title="VOIR" onPress={ () => this.props.handleMovieViewNavigationPress(this.props.movie)} />
        <Text style={styles.textStyle}>Langue : {language}</Text>
        <Text style={styles.textStyle}>Qualité : {torrents ? this.qualityGet(torrents) : ""}</Text>
        <Text style={styles.textStyle}>Genres : {genres ? genres.toString() : ""}</Text>
        <Text style={styles.textStyle}>Note : {rating ? rating.toString() : ""}</Text>
      </MovieDetailContent>
    )
  }
}
