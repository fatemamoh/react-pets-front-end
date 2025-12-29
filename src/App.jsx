import { useState, useEffect } from 'react';
import './App.css'
import * as petService from './services/petService'

function App() {
  const [pets, setPets] = useState([]);

  useEffect(()=>{
    const getAllPets = async () =>{
      const data = await petService.index();
      setPets(data)
    }
    getAllPets();
  },[])

  return (
    <>
     <h1>Blue Is Me?</h1>
    </>
  )
}

export default App
