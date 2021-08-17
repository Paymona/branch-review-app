import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { BorderSad, TriangleParticular } from '../../icons'
import styles from '../../styles/components/SadFace/SadFace.module.sass'

const SadFace = ({
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
