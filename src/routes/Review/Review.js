import React, { useEffect, useState } from 'react'
import styles from '../../styles/routes/Review/Review.module.sass'
import { API } from '../../components'
import { Star as StarIcon, StarBorder } from '../../icons'
import classNames from 'classnames'
import TextareaAutosize from 'react-textarea-autosize'
import { useHistory, useParams } from 'react-router-dom'

const Review = () => {

  const [ratings, setRatings] = useState([])

  const [comment, setComment] = useState('')

  const [fadeOut, setFadeOut] = useState(false)

  const {id} = useParams()

  const history = useHistory()

  const handleSetRating = (id, num) => {
    setRatings(prev => {
      const next = prev.concat()

      next.forEach(rating => {
        if (rating.id === id)
          rating.rating = num
      })

      return next
    })
  }

  const send = () => {

    const _rating = ratings.map(rating => {
      return {
        rating: rating.rating,
        text: rating.text
      }
    })

    const config = {
      method: 'patch',
      url: `review/patch?id=${id}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify([
        {
          patch: "isDetailed",
          to: true
        },
        {
          patch: "comment",
          to: comment
        },
        {
          patch: "rating",
          to: _rating
        }
      ])
    }

    API(config)

    setFadeOut(true)

    setTimeout(() => {
      history.push(`thanks`)
    }, 1000)
  }

  useEffect(() => {
    API.get('questions_to_rating/get')
      .then(res => res.data)
      .then(data => setRatings(data.map(d => { 
        return { 
          ...d, 
          rating: 0 
        } 
      })))
  }, [])

  return (
    <div className={classNames(styles.root, fadeOut && styles['root--fade-out'])}>
      
      <div className={styles.title}>
        Оцените качество обслуживания
      </div>

      {ratings.map(rating => 
        <Rating 
          key={rating.id}
          rating={rating}
          setRating={num => handleSetRating(rating.id, num)}
        /> 
      )}

      <TextareaAutosize
        type="text"
        minRows={10}
        className={styles.comment}
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder='Поделитесь вашими впечатлениями...'
      />

      <div className={styles.send_btn_wrap}>
        <button className={styles.send_btn} onClick={() => send()}>
          Оставить отзыв
        </button>
      </div>

    </div>
  )
}

const Rating = ({
  rating,
  setRating
}) => {

  return (
    <div className={styles.rating}>

      <div className={styles.rating__title}>
        {rating.text}
      </div>

      <div className={styles.rating__stars}>

        <Star
          onClick={() => setRating(1)}
          isActive={rating.rating >= 1}
        />

        <Star
          onClick={() => setRating(2)}
          isActive={rating.rating >= 2}
        />

        <Star
          onClick={() => setRating(3)}
          isActive={rating.rating >= 3}
        />

        <Star
          onClick={() => setRating(4)}
          isActive={rating.rating >= 4}
        />

        <Star
          onClick={() => setRating(5)}
          isActive={rating.rating === 5}
        />

      </div>

    </div>
  )
}

const Star = ({
  onClick,
  isActive
}) => {
  return (
    <button 
      className={classNames(styles.rating__star, isActive && styles['rating__star--active'])} 
      onClick={onClick}
    >
      {isActive ? 
        <StarIcon /> :
        <StarBorder />
      }
    </button>
  )
}

export default Review
