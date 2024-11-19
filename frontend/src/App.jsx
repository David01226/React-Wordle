import { useEffect, useState } from 'react'
import './App.css'
import Wordle from "./components/Wordle"


function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_API_URL}/solutions`)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution.word)
      })
  }, [setSolution])

  return (
    <>
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution}/>}
    </>
  )
}

export default App
