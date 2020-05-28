import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

function User() {
  const { user, setUser } = useContext(UserContext)


  return (
    <div>
      {user.username}
      <button onClick={() => setUser({ ...user, username: "123" })}>Enter</button>
    </div>
  )
}

export default User
