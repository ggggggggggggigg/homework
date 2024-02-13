import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [time, timer] = useState(true)
  const [count, setCount] = useState()
  const [title,settitle] = useState('⏰ Timer')
  const [but,nobut] = useState(true)

  useEffect(() => {

    const intervalid = setInterval(() => {
      setCount((prevcount) => prevcount - 1) //
      }, 1000 )


     return() => {
      clearInterval(intervalid)

     }

  }, [])

  

  const timerstart = () => {
    timer(false)
    settitle(`⏰ ${count} s left`)
  }

  const Timeend = () => {
    timer(true)
    setCount(0)

    
  }

  useEffect(() => {
    document.title = title
  }, []);

  function notifyMe() {
    nobut(false)
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification

      // …
    } else if (Notification.permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {

          // …
        }
      });
    }
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }


  if (time) {
    return(
      <>
      <div className='bb'> 
        <input
      type='number'
      onChange={(event) => setCount(event.target.value)}
      />
      <button onClick={timerstart}>start</button>
    </div>
    { but ? <button onClick={notifyMe}>Notify me!</button> : null}
    </>
    )
  }
  
  count < 0 ? setCount(0) : null

  count === 0 ? timer(true) : null

  count === 0 ? alert('time is up') : null

  count === 0 ? settitle('⏰ Time is up') : null
  
  return(      
  <>
    <div className='b'>
      <div className='timer'>
        <div>{count}</div>
      </div>
      <button onClick={Timeend}>reset</button>
    </div>
    </>
    )
}

export default App








    



