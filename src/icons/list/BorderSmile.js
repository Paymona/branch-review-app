import React from 'react'
import styled from 'styled-components'
import SvgTemplate from '../SvgTemplate'
import PropTypes from 'prop-types'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const BorderSmile = ({ 
  className,
  size
}) => ( 
  <div className={className}>
    <Svg viewBox="0 0 68 68" size={size} fill="currentColor">   
      <path 
        fill="currentColor" 
        d="M33.966 0C15.198 0 0 15.232 0 34C0 52.768 15.198 68 33.966 68C52.768 68 68 52.768 68 34C68 15.232 52.768 0 33.966 0ZM34 61.2C18.972 61.2 6.8 49.028 6.8 34C6.8 18.972 18.972 6.8 34 6.8C49.028 6.8 61.2 18.972 61.2 34C61.2 49.028 49.028 61.2 34 61.2ZM17 40.8C19.652 48.756 26.248 54.4 34 54.4C41.752 54.4 48.348 48.756 51 40.8H17Z" 
      />
    </Svg>
  </div>
)

BorderSmile.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
}

BorderSmile.defaultProps = {
  className: '',
  size: 68
}

export default BorderSmile