import React, { useEffect, useState } from 'react'

export default function Keypad({ usedKeys, isCorrect, turn, handleClick, setShowModal }) {
  const [letters, setLetters] = useState(null)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_API_URL}/letters`)
    .then(res => res.json())
    .then(json => {
      setLetters(json)
    })
  }, [])

  useEffect(() => {
    window.addEventListener("click", handleClick)

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener("click", handleClick)
    }

    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener("click", handleClick)
    }

    return () => window.removeEventListener("click", handleClick)
  }, [handleClick, isCorrect, turn])

  return (
    <>
      <div className="keypad">
        {letters && letters.map((letter) => {
          const color = usedKeys[letter.key]

          return (
            <div key={letter.key} className={`${color} key`}>{letter.key}</div>
          )
        })}
        <div className="key">Backspace</div>
        <div className="key">Enter</div>
      </div>
    </>
  )
}
