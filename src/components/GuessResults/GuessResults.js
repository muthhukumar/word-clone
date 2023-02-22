import React from "react"

import {NUM_OF_GUESSES_ALLOWED} from "../../constants"
import {range} from "../../utils"
import Guess from "../Guess/Guess"

function GuessResults({guesses, answer}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(index => {
        const guess = guesses[index]
        return <Guess value={guess?.label} key={index} answer={answer} />
      })}
    </div>
  )
}

export default GuessResults
