import React, {useState} from 'react'

const LoginForm = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMess, setErrorMess] = useState('')

 
  function handleSubmit(e){
    e.preventDefault()

    if(username !== '' && password !== ''){
      setPassword('')
      setUsername('')
      setErrorMess('')
      return
    }
    if(username === ''){
      setErrorMess('Please enter the valid username.')
      return
    }
    if(password === ''){
      setErrorMess('Please enter the valid password')
      return
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} type="text" id="username"></input>
          <input placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} type="password" id="password"></input>
          <button type="submit">Submit</button>
        </form>
        <p style={{color:'red'}} id="errorMessage">{errorMess}</p>
    </div>
  )
}

export default LoginForm