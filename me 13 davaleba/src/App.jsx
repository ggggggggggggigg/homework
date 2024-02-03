import { useState } from 'react'
import './App.css'


function App() {
  const [loading,setloading]=useState(false)
  const [text,newtext] = useState('')
  const [newjson,setjson] = useState([])

  const fetched = async () => {
    setloading(true)
    
    const responses = await fetch(`https://swapi.dev/api/people/?search=${text}`)

    const json = await responses.json()
    setjson(json)
    console.log(newjson)

    const responsess = await fetch(`https://swapi.dev/api/planets/?search=Tatooine`)

    const jsonn = await responsess.json()
    console.log(jsonn)
    setloading(false)


  }
  
  return (
    <>
    <div>
      <input
        type="text"
        onChange={(event) => newtext(event.target.value )}
      />
      <button onClick={fetched}>search</button>
    </div>
    {loading ? <span>loading...</span> : ''}
    </>
  )
}

export default App








    



