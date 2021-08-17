import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { BorderPoker } from '../../icons'
import styles from '../../styles/components/PokerFace/PokerFace.module.sass'

const PokerFace = ({
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
