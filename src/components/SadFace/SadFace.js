import classNames from 'classnames'
import React from 'react'
import { BorderSad, TriangleParticular } from '../../icons'
import styles from '../../styles/components/SadFace/SadFace.module.sass'

const SadFace = ({
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
        <div className={classNames(styles.particle, styles.particle_1)}>
          <TriangleParticular />
        </div>
        <div className={classNames(styles.particle, styles.particle_2)}>
          <TriangleParticular />
        </div>
        <div className={classNames(styles.particle, styles.particle_3)}>
          <TriangleParticular />
        </div>
      </div>

      <div className={styles.face}>

        <div className={styles.eyes}>
          <div className={classNames(styles.eye__wrap, styles.eye__wrap__left)}>
            <div className={classNames(styles.eye, styles.eye__left)} />
          </div>
          <div className={classNames(styles.eye__wrap, styles.eye__wrap__right)}>
            <div className={classNames(styles.eye, styles.eye__right)} />
          </div>
        </div>

        <div className={styles.border_smile}>
          <BorderSad />
        </div>

      </div>

    </div>
  )
}

export default SadFace
