import React from 'react'
import styled from 'styled-components'
import SvgTemplate from '../SvgTemplate'
import PropTypes from 'prop-types'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const BorderPoker = ({ 
  className,
  size
}) => ( 
  <div className={className}>
    <Svg viewBox="0 0 68 68" size={size} fill="currentColor">   
      <path 
        fill="currentColor" 
        d="M33.966 0C15.198 0 0 15.232 0 34C0 52.768 15.198 68 33.966 68C52.768 68 68 52.768 68 34C68 15.232 52.768 0 33.966 0ZM34 61.2C18.972 61.2 6.8 49.028 6.8 34C6.8 18.972 18.972 6.8 34 6.8C49.028 6.8 61.2 18.972 61.2 34C61.2 49.028 49.028 61.2 34 61.2ZM34 47.6C31.518 47.6 29.308 46.988 27.336 45.832C26.928 46.308 24.412 49.164 23.902 49.742C26.826 51.612 30.26 52.7 34 52.7C37.774 52.7 41.208 51.578 44.132 49.708C40.834 46.002 44.098 49.64 40.698 45.798C38.692 46.988 36.482 47.6 34 47.6Z" 
      />
    </Svg>
  </div>
)

BorderPoker.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
}

BorderPoker.defaultProps = {
  className: '',
  size: 68
}

export default BorderPoker