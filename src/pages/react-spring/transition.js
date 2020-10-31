import React, { useState, useCallback } from 'react'
import { useTransition, animated} from 'react-spring'
import styles from './styles/transition.less'

const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
]

export default function() {
  const [index, setIndex] = useState(0)
  const onClick = useCallback(() => setIndex(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    <div className={styles['simple-trans-main']} onClick={onClick}>
      {transitions.map(( { item, props, key} ) => {
        const Page = pages[item]
        return <Page key={key} style={props}></Page>
      })}
    </div>
  )
}