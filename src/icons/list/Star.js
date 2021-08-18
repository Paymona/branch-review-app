import React from 'react'
import styled from 'styled-components'
import SvgTemplate from '../SvgTemplate'
import PropTypes from 'prop-types'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const Star = ({ 
  className,
  size
}) => ( 
  <div className={className}>
    <Svg viewBox="0 0 56 56" size={size} fill="currentColor">   
      <path 
        fill="currentColor" 
        d="M27.9998 40.297L42.4198 49.0003L38.5932 32.597L51.3332 21.5603L34.5565 20.137L27.9998 4.66699L21.4432 20.137L4.6665 21.5603L17.4065 32.597L13.5798 49.0003L27.9998 40.297Z" 
      />
    </Svg>
  </div>
)

Star.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
}

Star.defaultProps = {
  className: '',
  size: 56
}

export default Star