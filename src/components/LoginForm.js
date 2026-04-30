import React, {useState} from 'react'

const LoginForm = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMess, setErrorMess] = useState(false)

 
  function handleSubmit(e){
    e.preventDefault()

    if(username !== '' && password !== ''){
      setPassword('')
      setUsername('')
      setErrorMess(false)
      return
    }
    if(username === '' || password === ''){
      setErrorMess(true)
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} type="text" id="username"></input>
          <input placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} type="password" id="password"></input>
          <button type="submit">Submit</button>
        </form>
        {errorMess ? <p style={{color:'red'}} id="errorMessage">Both username and password are required.</p> : null}
        
    </div>
  )
}

export default LoginForm