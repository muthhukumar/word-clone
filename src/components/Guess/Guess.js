import React from "react"

import {checkGuess} from "../../game-helpers"

function Guess({value = "", answer}) {
  const result = checkGuess(value, answer) ?? {}

  function getCellCss(status) {
    return status !== "incorrect" && status !== "misplaced" && status !== "correct" ? "" : status
  }
  return (
    <p className="guess">
      <span className={`cell ${getCellCss(result[0]?.status)}`}>{value.charAt(0)}</span>
      <span className={`cell ${getCellCss(result[1]?.status)}`}>{value.charAt(1)}</span>
      <span className={`cell ${getCellCss(result[2]?.status)}`}>{value.charAt(2)}</span>
      <span className={`cell ${getCellCss(result[3]?.status)}`}>{value.charAt(3)}</span>
      <span className={`cell ${getCellCss(result[4]?.status)}`}>{value.charAt(4)}</span>
    </p>
  )
}

export default Guess
