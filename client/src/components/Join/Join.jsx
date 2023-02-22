import React, {useRef} from 'react'
import io from 'socket.io-client'

export default function Join({setChatVisibility, setSocket}) {

  const usernameRef = useRef()

  const handleSubmit = async () => {
    const username = usernameRef.current.value
    if(!username.trim()) return
    const socket = await io.connect('http://localhost:3001')
    socket.emit('set_username', username)
    setSocket(socket)
    setChatVisibility(true)
  }

  return (
    <div>
      <h1>Join</h1>
      <input type="text" ref={usernameRef} placeholder='Nome de usuário' />
      <button onClick={()=>handleSubmit()}>Entrar</button>
    </div>
  )
}
