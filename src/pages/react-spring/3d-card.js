import { Link }from 'umi'
import React from 'react'
import { useSpring, animated } from 'react-spring'

import styles from './styles/3d-card.less'

const calc = (x, y ) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


export default function() {

  const [props, set] = useSpring(() => ({xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  console.log(props)
  return (
    <animated.div
      className={styles.card}
      onMouseMove={({clientX: x, clientY: y}) => {
        console.log('onMouseMove')
          set({ xys: calc(x, y)})
        }
      }
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  );
}
