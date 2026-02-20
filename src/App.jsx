import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchJoke = () => {
    // Shows the  loading state while the joke is bein fretched
    setLoading(true)

    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then((res) => res.json())
      .then((data) => {
        // Fallback in case the api doesnt return a joke
       setJoke(data.joke || 'No joke available right now !.')
      })
      .catch(() => {
        
      setJoke('Failed to load joke. Please try again.')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    // Fetch one joke when the component is first mounts.
    fetchJoke()
  }, [])

  return (
    <div className="app">
      <h1>PROGRAMMING JOKES</h1>
      <JokeDisplay joke={joke} loading={loading} />
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App
