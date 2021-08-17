import React from 'react'
import styled from 'styled-components'
import SvgTemplate from '../SvgTemplate'
import PropTypes from 'prop-types'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const TriangleParticular = ({ 
  className,
  size
}) => ( 
  <div className={className}>
    <Svg viewBox="0 0 68 68" size={size} fill="currentColor">   
      <path 
        fill="currentColor" 
        d="M23.5 0L46.4497 39.75H0.550327L23.5 0Z" 
      />
    </Svg>
  </div>
)

TriangleParticular.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
}

TriangleParticular.defaultProps = {
  className: '',
  size: 68
}

export default TriangleParticular