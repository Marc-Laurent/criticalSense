import { StackNavigator } from 'react-navigation'

import Movies from '../screens/movies'
import MoviesDetail from '../screens/movieDetail'
import MovieView from '../screens/movieView'
import Home from '../screens/home'
import Options from '../screens/options'
import Search from '../screens/search'

const optionsGeneral = {
  mode: 'modal',
  headerMode: 'none'
}

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null
    }
  },
  Movies: {
    screen: Movies,
    navigationOptions: {
      headerTitle: 'Films'
    }
  },
  MovieDetail: {
    screen: MoviesDetail,
    navigationOptions: {
      headerTitle: 'Description'
    }
  },
  MovieView: {
    screen: MovieView,
    navigationOptions: {
      headerTitle: ''
    }
  },
  Options: {
    screen: Options,
    navigationOptions: {
      headerTitle: 'Options'
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      headerTitle: 'Recherche'
    }
  }
})

export default StackNavigator(
  {
    Home: {
      screen: HomeStack
    }
  },
  optionsGeneral
)
