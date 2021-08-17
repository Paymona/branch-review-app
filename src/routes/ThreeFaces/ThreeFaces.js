import classNames from 'classnames'
import React, { useState } from 'react'
import { HappyFace, PokerFace, SadFace } from '../../components/'
import styles from '../../styles/routes/ThreeFaces/ThreeFaces.module.sass'

const ThreeFaces = () => {

  const [status, setStatus] = useState(null)

  return (
    <div className={styles.root}>

      <div className={styles.wrap}>

        <div className={styles.title}>
          Оцените качество обслуживания
        </div>

        <div className={styles.faces}>
          
          <div className={styles.face}>
            <SadFace 
              disabled={status !== -1 && status !== null} 
              onClick={() => setStatus(-1)} 
              active={status === -1}
            />
            <div className={classNames(styles.face_description, styles.face_description_sad, status === null && styles['face_description--active'])}>
              Не понравилось
            </div>
          </div>
          
          <div className={styles.face}>
            <PokerFace 
              disabled={status !== 0 && status !== null} 
              onClick={() => setStatus(0)} 
              active={status === 0}
            />
            <div className={classNames(styles.face_description, styles.face_description_poker, status === null && styles['face_description--active'])}>
              Нормально
            </div>
          </div>
          
          <div className={styles.face}>
            <HappyFace 
              disabled={status !== 1 && status !== null} 
              onClick={() => setStatus(1)} 
              active={status === 1}
            />
            <div className={classNames(styles.face_description, styles.face_description_happy, status === null && styles['face_description--active'])}>
              Понравилось
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default ThreeFaces
