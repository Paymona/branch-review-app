import React from 'react'
import styled from 'styled-components'
import SvgTemplate from '../SvgTemplate'
import PropTypes from 'prop-types'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const StarBorder = ({ 
  className,
  size
}) => ( 
  <div className={className}>
    <Svg viewBox="0 0 56 56" size={size} fill="currentColor">   
      <path 
        fill="currentColor" 
        d="M51.3332 21.5603L34.5565 20.1137L27.9998 4.66699L21.4432 20.137L4.6665 21.5603L17.4065 32.597L13.5798 49.0003L27.9998 40.297L42.4198 49.0003L38.6165 32.597L51.3332 21.5603ZM27.9998 35.9337L19.2265 41.2303L21.5598 31.2437L13.8132 24.5237L24.0332 23.637L27.9998 14.2337L31.9898 23.6603L42.2098 24.547L34.4632 31.267L36.7965 41.2537L27.9998 35.9337Z" 
      />
    </Svg>
  </div>
)

StarBorder.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
}

StarBorder.defaultProps = {
  className: '',
  size: 56
}

export default StarBorder