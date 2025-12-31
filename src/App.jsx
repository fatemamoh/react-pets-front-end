import { useState, useEffect } from 'react';
import './App.css'
import * as petService from './services/petService'
import PetList from './components/PetsList/PetList';
import { Routes, Route, Link } from 'react-router';
import PetDetail from './components/PetDetail/PetDetail';
import PetForm from './components/PetForm/PetForm'; 

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

const updatePets = (pet) =>{
  setPets([...pets, pet])   
}

  return (
<>
<div>
  <Link to="/">Home</Link> || {' '}
  <Link to="/pets/new">Create Pet</Link>

</div>
<Routes>
  <Route path='/' element={<PetList pets={pets}/>}/>
  <Route path='/pets/:id' element={<PetDetail/>}/>
    <Route path='/pets/new' element={<PetForm />}/>
</Routes>
</>

  )
    
}

export default App
