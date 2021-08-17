import classNames from 'classnames'
import React from 'react'
import { BorderSmile } from '../../icons'
import styles from '../../styles/components/HappyFace/HappyFace.module.sass'

const HappyFace = ({
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

      <div className={styles.particles}>
        <div className={classNames(styles.particle, styles.particle_1)} />
        <div className={classNames(styles.particle, styles.particle_2)} />
        <div className={classNames(styles.particle, styles.particle_3)} />
      </div>

      <div className={styles.face}>

        <div className={styles.eyes}>
          <div className={classNames(styles.eye, styles.eye__left)} />
          <div className={classNames(styles.eye, styles.eye__right)} />
        </div>

        <div className={styles.border_smile}>
          <BorderSmile />
        </div>

      </div>

    </div>
  )
}

export default HappyFace
