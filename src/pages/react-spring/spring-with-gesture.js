import React from 'react'
import { Heart } from 'react-feather'
import styles from './styles/spring-with-gesture.less'
import { useGestureResponder } from 'react-gesture-responder'
import { useSpring, animated } from 'react-spring'

function Slider({ children }) {
  const [{ x }, set] = useSpring(() => {
    return { x: 0 }
  })

  function shouldLike(x) {
    return x < -100
  }


  const [isLiking, setIsLiking] = React.useState(false);

  
  const { bind } = useGestureResponder({
    // the view should claim the responder when touched
    onStartShouldSet: () => true,
    onMove: state => {
      const [x] = state.delta
      const like = shouldLike(x)
      if (like !== isLiking) {
        setIsLiking(like)
      }
      set({ x, immediate: true }) // the immediate flag bypasses the transition animation
    },
    onRelease: state => {
      if (shouldLike(state.delta[0])) {
        console.log('User has liked!')
      }
      set({ x: 0, immediate: false })
    },
  })

  const heartPosition = x.interpolate({
    map: x => {
      const xa = Math.abs(x)
      return addResistance(xa)
    },
    range: [0, 300],
    output: ['translateX(15px)', 'translateX(-135px)'],
    extrapolate: 'clamp'
  })

  function addResistance(x) {
    const absX = Math.abs(x)

    if (absX > 150) {
      return x + (absX - 150) * 0.6 * (x < 0 ? 1 : -1)
    }

    return x
  }
  return (
    <animated.div className={styles['list-item']}>
      <div
        className={styles.background}
        style={{
          borderRadius: '5px',
          overflow: 'hidden',
          transform: 'background 0.3s ease',
          background: isLiking ? '#14833c' : '#374047'
        }}>
        <animated.div
          style={{
            transform: heartPosition
          }}>
          <Heart
            size={28}
            style={{
              color: 'white',
              fill: isLiking ? 'white' : 'transparent',
              transform: isLiking ? 'scale(0.85)' : 'scale(1)',
              transition: 'transform 0.3s ease'
            }}
          />
        </animated.div>
      </div>
      <animated.div
        {...bind}
        style={{
          transform: x.interpolate(x => {
            return `translateX(${addResistance(x)}px)`
          })
        }}
        className={styles['sliding-pane']}>
        {children}
      </animated.div>
    </animated.div>
  )
}

export default function() {
  return (
    <Slider>Pull left to like</Slider>
  )
}