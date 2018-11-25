import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const CoverCustom = styled.Image`
  /* background-color: yellow; */
  border-radius: ${props => props.size / 2 || '0'};
  height: ${props => props.size || '115px'};
  width: ${props => props.size || '80px'};
  background-color: #000;
`

export default class Cover extends React.Component {
  static propTypes = {
    size: PropTypes.number,
    src: PropTypes.object
  }
  render() {
    const { size } = this.props
    return <CoverCustom size={size} {...this.props} />
  }
}
