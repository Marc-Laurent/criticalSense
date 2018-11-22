import { Text } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const BackgroundView = styled.View`
  background-color: #000;
  flex: 1;
  justify-content: center;
`
const Content = styled.View`
  background-color: #000;
  flex: 3;
`
// const SubTitle = styled.text`
//   fontSize: 18px;
//   margin-bottom: 10px;
// `

const Header = styled.View`
  align-items: center;
  background-color: #000;
  flex: 1;
  justify-content: center;
`

const textAlert = {
  fontSize: 20,
  textAlign: 'center',
  fontWeight: 'bold',
  color: "#e50914"
}

export default class Options extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  state = {
    movieData: null
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
        <Header></Header>
        {this.state.movieData ? (
          <Content>
          </Content>
        ) : (
          <Content>
            <Text style={textAlert}>Pas de donnée</Text>
          </Content>
        )}
      </BackgroundView>
    )
  }
}
