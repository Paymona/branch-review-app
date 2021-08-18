import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styles from '../../styles/routes/ThanksPage/ThanksPage.module.sass' 

const ThanksPage = () => {  

  const { id } = useParams()
  
  const history = useHistory()

  useEffect(() => {

    setTimeout(() => {
      history.push(`/${id}`)
    }, 5000)

  }, [history, id])

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Спасибо за ваш отзыв!  
      </div> 
    </div>
  )
}

export default ThanksPage
