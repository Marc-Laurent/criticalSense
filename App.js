import React, {Component} from 'react'
import { StyleSheet } from 'react-native'
import { ThemeProvider } from 'styled-components'

import StackNavigator from './app/config/routes'
import { store } from './app/config/store'

type Props = {}
export default class App extends Component<Props> {

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={currentTheme}>
          <StackNavigator />
        </ThemeProvider>
      </Provider>
    )
  }
}

const currentTheme = {
  color: {
    primary: '#95D4AB',
    secondary: '#44875B'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  article: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
