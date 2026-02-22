import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'
import './App.css'

function App() {
  const [joke, setJoke] = useState('')       // stores the joke text
  const [loading, setLoading] = useState(true) // loading state

  const fetchJoke = () => {
    setLoading(true)
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke)
        setLoading(false)
      })
      .catch(() => {
        setJoke('Oops! Something went wrong.')
        setLoading(false)
      })
  }

  // useEffect to fetch a joke on first render
  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div className="app">
      <h1>Code Giggles</h1>
      <JokeDisplay joke={joke} loading={loading} />
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App;