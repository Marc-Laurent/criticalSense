import { Image } from 'react-native'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import ParameterImage from '../static/images/home.jpg'

const BackgroundView = styled.View`
  flex: 1;
`
const ContentContainer = styled.View`
  background-color: #95D4AB;
  flex: 5;
  justify-content: center;
  align-items: center;
`

const ParameterContainer = styled.View`
  background-color: #44875B;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const ParameterTouchableOpacity = styled.TouchableOpacity``

export default class App extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  // handle navigation
  handleHomeButtonPress = () => {
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <BackgroundView>
        <ContentContainer />
        <ParameterContainer>
          <ParameterTouchableOpacity onPress={this.handleHomeButtonPress}>
            <Image source={ParameterImage} />
          </ParameterTouchableOpacity>
        </ParameterContainer>
      </BackgroundView>
    )
  }
}
