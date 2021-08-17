import classNames from 'classnames'
import React from 'react'
import { BorderPoker } from '../../icons'
import styles from '../../styles/components/PokerFace/PokerFace.module.sass'

const PokerFace = ({
  className,
  onClick,
  disabled,
  active
}) => {

  const handleClick = () => {
    onClick()
  }

  return (
    <div 
      className={classNames(
        className,
        styles.root, 
        disabled && styles['root--disabled'],
        active && styles['root--active']
      )}
      onClick={() => handleClick()}
    >

      <div className={styles.face}>

        <div className={styles.eyes}>
          <div className={classNames(styles.eye, styles.eye__left)} />
          <div className={classNames(styles.eye, styles.eye__right)} />
        </div>

        <div className={styles.border_smile}>
          <BorderPoker />
        </div>

      </div>

    </div>
  )
}

export default PokerFace
