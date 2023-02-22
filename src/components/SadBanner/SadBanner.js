import React from "react"

function SadBanner({onRestart}) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>LEARN</strong>.
      </p>
      <button onClick={onRestart}>Restart Game</button>
    </div>
  )
}

export default SadBanner
