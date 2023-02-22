import React from "react"

function GameInput({guess, setGuess, onSubmit, gameStatus}) {
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        maxLength={5}
        minLength={5}
        pattern=".{5,}"
        onChange={event => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  )
}

export default GameInput
