import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { BorderSmile } from '../../icons'
import styles from '../../styles/components/HappyFace/HappyFace.module.sass'

const HappyFace = ({
  className
}) => {

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(true)
  }

  useEffect(() => {
    setActive(false)
  }, [])

  return (
    <div 
      className={classNames(
        className,
        styles.root, 
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
