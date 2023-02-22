import React from "react"

import {sample} from "../../utils"
import {WORDS} from "../../data"
import GameInput from "../GameInput/GameInput"
import GuessResults from "../GuessResults/GuessResults"
import HappyBanner from "../HappyBanner"
import SadBanner from "../SadBanner"
import {NUM_OF_GUESSES_ALLOWED} from "../../constants"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({answer})

const GAME_STATUS = {
  PLAYING: "playing",
  WON: "won",
  LOST: "lost",
}

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS))
  console.log("🚀 ~ file: Game.js ~ line 24 ~ Game ~ answer", answer)
  const [gameStatus, setGameStatus] = React.useState(GAME_STATUS.PLAYING)
  const [guess, setGuess] = React.useState("")
  const [guesses, setGuesses] = React.useState([])

  const handleSubmit = event => {
    event.preventDefault()

    const newGuesses = [...guesses]

    newGuesses.push({label: guess, id: Math.random()})

    // @ts-ignore
    setGuesses(newGuesses)
    setGuess("")

    if (guess !== answer && newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return setGameStatus(GAME_STATUS.LOST)
    }

    if (guess === answer) {
      return setGameStatus(GAME_STATUS.WON)
    }
  }

  const handleRestart = () => {
    setAnswer(sample(WORDS))
    setGuess("")
    setGuesses([])
    setGameStatus(GAME_STATUS.PLAYING)
  }

  return (
    <>
      {gameStatus === GAME_STATUS.WON && <HappyBanner />}
      {gameStatus === GAME_STATUS.LOST && <SadBanner onRestart={handleRestart} />}
      <GuessResults guesses={guesses} answer={answer} />
      <GameInput
        guess={guess}
        setGuess={setGuess}
        onSubmit={handleSubmit}
        gameStatus={gameStatus}
      />
    </>
  )
}

export default Game
