import React, {useState} from 'react'

const App = () => {
  const [yCoordinate, setYCoordinate] = useState(0)
  const [xCoordinate, setXCoordinate] = useState(50)
  const [affirmation,setAffirmation] = useState(false)
  
  return (
    <>
    {affirmation ? <>
    <h1>I already knew it!!!</h1>
    <div>
      <button className='btn check_again_btn' onClick={()=> {setAffirmation(false);
      setXCoordinate(50);setYCoordinate(0)}}>Want to check again?</button>
    </div>
    </> :
    <>
    <h1>Are you dumb?</h1>
      <button className='btn yes_btn' onClick={()=> setAffirmation(true)}>Yes</button>
        <button className='btn no_btn' 
          onClick={()=>{setYCoordinate(Math.floor(Math.random()*40) + 1);
          setXCoordinate(Math.floor(Math.random()*68) + 16)}}
          style={{transform: `translateX(-40px) translateX(${xCoordinate}vw) translateY(${yCoordinate}vh)`}}>No</button>
    </>
    }
    </>   
  )
}

export default App