import React from 'react'
import { HappyFace, PokerFace, SadFace } from '../../components/'
import styles from '../../styles/routes/ThreeFaces/ThreeFaces.module.sass'

const ThreeFaces = () => {
  return (
    <div className={styles.root}>
      <SadFace />
      <PokerFace />
      <HappyFace />
    </div>
  )
}

export default ThreeFaces
