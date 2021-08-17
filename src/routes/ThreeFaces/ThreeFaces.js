import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { HappyFace, PokerFace, SadFace } from '../../components/'
import styles from '../../styles/routes/ThreeFaces/ThreeFaces.module.sass'

const ThreeFaces = () => {

  const [status, setStatus] = useState(null)

  const history = useHistory()

  useEffect(() => {

    if (status === null) return

    setTimeout(() => {
      window.location.reload()
    }, 10000)

  }, [status])

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

        <div className={styles.footer}>

          <div 
            className={classNames(
              styles.info_btn, 
              status !== null && styles['info_btn--active'],
              status === -1 ? styles.info_btn_sad : status === 0 ? styles.info_btn_poker : status === 1 ? styles.info_btn_smile : '' 
            )}
          >
            {status === -1 ?
              <>Ваш ответ принят!<br />Расскажите, что Вам не понравилось</>
              : status === 0 ?
              <>Оцените качество обслуживания</>
              : status === 1 ?
              <>Ваш ответ принят!<br />Мы рады, что вам понравилось!</>
              :
              <></>
            }
          </div>

          <button 
            className={classNames(
              styles.more_btn, 
              status !== null && styles['more_btn--active']
            )}
            onClick={() => history.push('/review')}
          >
            Оставить отзыв
          </button>

        </div>

      </div>


    </div>
  )
}

export default ThreeFaces
