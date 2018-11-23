import { Text, ScrollView, Button } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Cover from '../components/cover'

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

const Summarycontainer = styled.View`
  flexGrow: 1;
  height: 150px;
  margin-bottom: 10px;
  flex: 1;
`

const textTitleStyle = {
  color: '#FFF',
  fontSize: 20,
  textAlign: 'center',
  fontWeight: 'bold'
}

const textSummaryStyle = {
  color: '#FFF',
  marginBottom: 12,
  fontSize: 18
}

const textStyle = {
  color: '#FFF',
  marginBottom: 12,
  fontSize: 16
}

export default class MovieDetails extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  state = {
    movieData: null
  }

  handleMovieViewNavigationPress = movieData => {
    this.props.navigation.navigate('MovieView', {
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

 qualityGet = torrents => {
    const qualities = []

    torrents.map( torrent =>
      qualities.push(torrent.quality)
    )

    return qualities.toString()
  }

  render() {
    const { movieData } = this.state
    return (
      <BackgroundView>
        <Header>
          {this.state.movieData ? (
            <Cover source={{ uri: movieData.medium_cover_image }} resizeMode="center" />
          ) : null}
        </Header>
        {this.state.movieData ? (
          <Content>
            <Text style={textTitleStyle}>{movieData.title}</Text>
            <Text>Année de sortie   {movieData.year ? movieData.year.toString() : ""}</Text>
            <Text style={textSummaryStyle}>Résumé :</Text>
            <Summarycontainer>
              <ScrollView>
                <Text style={textStyle}>{movieData.summary}</Text>
              </ScrollView>
            </Summarycontainer>
            <Button color="#e50914"  title="VOIR" onPress={ () => this.handleMovieViewNavigationPress(movieData)} />
            <Text style={textStyle}>Langue : {movieData.language ? movieData.language : ""}</Text>
            <Text style={textStyle}>Qualité : {movieData.torrents ? this.qualityGet(movieData.torrents) : ""}</Text>
            <Text style={textStyle}>Genres : {movieData.genres ? movieData.genres.toString() : ""}</Text>
            <Text style={textStyle}>Note : {movieData.rating ? movieData.rating.toString() : ""}</Text>
          </Content>
        ) : (
          <Content>
            <Text>Pas de donnée</Text>
          </Content>
        )}
      </BackgroundView>
    )
  }
}
