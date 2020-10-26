import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import classnames from 'classnames'
import styles from './styles/clip-card.less'

export default function () {
  const [flipped, set ] = useState(false)
  
  const { opacity, transform } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  return (
    <div onClick={() => set(state => !state)}>
      <animated.div className={classnames(styles.c, styles.back)} style={{ opacity: opacity.interpolate(o => 1 - o), transform }}/>
      <animated.div className={classnames(styles.c, styles.front)} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`)}}/>
    </div>
  )
}