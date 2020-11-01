import React, { useState, useEffect } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'
import { fetch }  from 'whatwg-fetch'

export default function() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
  },[])

  
  const trails = useTrail(users.length, {
    from: { marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { marginLeft: 20, opacity: 1, transform: 'translate3d(0,0px,0)' }
  })

  console.log(trails)

  return (
    <>
      <h1>Random User</h1>
      {trails.map((props, index) => (
        <animated.div
          key={users[index]}
          style={props}
        >
          {users[index].username}
        </animated.div>
      ))}
    </>
  )
}