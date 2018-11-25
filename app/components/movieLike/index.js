import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import LikeImage from '../static/images/like.png'
import UnLikeImage from '../static/images/unlike.png'
import LikeGreenImage from '../static/images/like-green.png'
import UnLikeOrangeImage from '../static/images/unlike-orange.png'

const MovieLikeContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #FFF;
`

const CounterContainer = styled.View`
  align-self: flex-end;
`

const styles = StyleSheet.create({
  textCount: {
    color: '#FFF',
    fontSize: 16
  },
  img: {
    flex: 1,
    resizeMode: 'contain',
    width: 35,
    height: 20
  }
})

export default class MovieLike extends Component<{}> {
  static propTypes = {
    movie: PropTypes.object
  }

  state = {
    like:  {
      count: 0,
      colorLike: false,
      colorUnlike: false
    }
  }

  actionMovieLike = (movie, like) => {
    console.log("-----------------------------------------");
    if(movie && movie.like){
      movie.like.count = like ? movie.like.count + 1 : movie.like.count - 1
      movie.like.colorLike = movie.like.count > 0 ? true : false
      movie.like.colorUnlike  = movie.like.count < 0 ? true : false

      this.setState({
        like: movie.like
      })

      console.log(this.state.like)
    }
  }

  render() {
    const like =  {
      count: 0,
      colorLike: false,
      colorUnlike: false
    }

    this.props.movie['like'] = this.props.movie['like'] ? this.props.movie['like'] : like
    this.state.like = this.props.movie.like

    return (
      <MovieLikeContainer>
        <TouchableOpacity onPress={ () => this.actionMovieLike(this.props.movie, true)}>
          <Image style={styles.img} source={this.state.like.colorLike ? LikeGreenImage : LikeImage}  />
       </TouchableOpacity>
       <TouchableOpacity style={this.state.like.colorUnlike ? styles.btnError : styles.btnStandard} onPress={ () => this.actionMovieLike(this.props.movie, false)}>
         <Image style={styles.img} source={this.state.like.colorUnlike ? UnLikeOrangeImage : UnLikeImage} />
        </TouchableOpacity>
        <CounterContainer>
          <Text style={styles.textCount}>{ this.state.like.count.toString() }</Text>
        </CounterContainer>
      </MovieLikeContainer>
    )
  }
}
