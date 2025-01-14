// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [username, setUsername] = React.useState('')
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  const validateInput = () => {
    setUsername(inputRef.current.value.toLowerCase())
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userNameInput">Username:</label>
          <input
            id="userNameInput"
            type="text"
            ref={inputRef}
            onChange={validateInput}
            value={username}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
