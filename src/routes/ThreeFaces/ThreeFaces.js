import React from 'react'
import { HappyFace, PokerFace, SadFace } from '../../components/'
import styles from '../../styles/routes/ThreeFaces/ThreeFaces.module.sass'

const ThreeFaces = () => {
  return (
    <div className={styles.root}>
      <PokerFace />
      <SadFace />
      <HappyFace />
    </div>
  )
}

export default ThreeFaces
