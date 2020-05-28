import React, { useState } from 'react'
import ListUser from './components/ListUser'
import { UserProvider } from './contexts/UserContext'

function App() {
  const [user, setUser] = useState({ username: "admin", password: "123123" })

  return (
    <UserProvider value={{ user, setUser }}>
      <ListUser />
    </UserProvider >
  )
}

export default App
