import React from 'react'
import styled from 'styled-components'
import SvgTemplate from '../SvgTemplate'
import PropTypes from 'prop-types'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const BorderSad = ({ 
  className,
  size
}) => ( 
  <div className={className}>
    <Svg viewBox="0 0 68 68" size={size} fill="currentColor">   
      <path 
        fill="currentColor" 
        d="M33.966 0C15.198 0 0 15.232 0 34C0 52.768 15.198 68 33.966 68C52.768 68 68 52.768 68 34C68 15.232 52.768 0 33.966 0ZM34 61.2C18.972 61.2 6.8 49.028 6.8 34C6.8 18.972 18.972 6.8 34 6.8C49.028 6.8 61.2 18.972 61.2 34C61.2 49.028 49.028 61.2 34 61.2ZM34 49.3C36.482 49.3 38.726 49.946 40.698 51.102C41.106 50.626 43.622 47.77 44.132 47.226C41.242 45.322 37.774 44.2 34 44.2C30.226 44.2 26.758 45.322 23.834 47.192C27.132 50.898 23.868 47.26 27.268 51.068C29.274 49.946 31.518 49.3 34 49.3Z" 
      />
    </Svg>
  </div>
)

BorderSad.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
}

BorderSad.defaultProps = {
  className: '',
  size: 24
}

export default BorderSad