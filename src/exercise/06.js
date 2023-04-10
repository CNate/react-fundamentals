// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [error, setError] = React.useState(null)
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  const validateInput = () => {
    const value = inputRef.current.value
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <>
      {error ? <h1 role="alert">{error}</h1> : undefined}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userNameInput">Username:</label>
          <input
            id="userNameInput"
            type="text"
            ref={inputRef}
            onChange={validateInput}
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
