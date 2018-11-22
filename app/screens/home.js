import { Button } from 'react-native'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

const BackgroundView = styled.View`
  background-color: #000;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled.View`
  flex-direction: row;
`

export default class App extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  // handle navigation
  handleMoviesButtonPress = () => {
    this.props.navigation.navigate('Movies')
  }

  handleParameterButtonPress = () => {
    this.props.navigation.navigate('Search')
  }

  render() {
    return (
      <BackgroundView>
        <ButtonContainer>
          <Button color="#e50914"  title="Recherche" onPress={this.handleParameterButtonPress} />
          <Button color="#e50914"  title="Films" onPress={this.handleMoviesButtonPress} />
        </ButtonContainer>
      </BackgroundView>
    )
  }
}
