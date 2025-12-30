import { useState, useEffect } from 'react';
import './App.css'
import * as petService from './services/petService'
import PetList from './components/PetsList/PetList';

function App() {
  const [pets, setPets] = useState([]);

  useEffect(()=>{
    const getAllPets = async () =>{
      try{  
      const data = await petService.index();
      setPets(data)
    } 
    catch(error){
      console.log(error)
    }
    
    }
    getAllPets();
  },[])

  return (
    <>
     <h1>Blue Is Me?</h1>
     <PetList pets={pets}/>
    </>
  )
}

export default App
