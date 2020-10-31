import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring'
import styles from './styles/trails.less'

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0}
  })

  return (
    <div className={styles['trails-main']} {...props}>
      <div>
        { trail.map(({x, height, ...rest}, index) => (
          <animated.div
            key={index}
            className={styles['trails-text']}
            style={{ ...rest, transform: x.interpolate((x) => `trnaslate3d(0, ${x}px, 0)`)}}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default function() {
  const [open, set] = useState(true)
  return (
    <Trail open={open} onClick={() => set((state) => !state)}>
      <span>Lorem</span>
      <span>Ipsum</span>
      <span>Dolor</span>
      <span>Sit</span>
    </Trail>
  )
}