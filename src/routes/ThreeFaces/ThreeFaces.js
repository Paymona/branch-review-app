import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { API, HappyFace, PokerFace, SadFace } from '../../components/'
import styles from '../../styles/routes/ThreeFaces/ThreeFaces.module.sass'

const ThreeFaces = () => {

  const [status, setStatus] = useState(null)

  const history = useHistory()

  const { id } = useParams()

  useEffect(() => {

    if (status === null) return

    const config = {
      method: 'post',
      url: `review/create?branch_id=${id}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        status,
        date: new Date()
      })
    }

    API(config)

    const timer = setTimeout(() => {
      window.location.reload()
    }, 10000)

    return () => clearTimeout(timer)

  }, [status, id])

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
            onClick={() => history.push(`/${id}/review`)}
          >
            Оставить отзыв
          </button>

        </div>

      </div>


    </div>
  )
}

export default ThreeFaces
