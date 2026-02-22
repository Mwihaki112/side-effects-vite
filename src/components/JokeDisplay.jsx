// Step 1: Accept `joke` and `loading` as props

const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      {loading ? <p>Loading...</p> : <p>{joke}</p>}
    </div>
  )
}

export default JokeDisplay;