import { useState, useEffect } from "react"
import * as petService from '../../services/petService';
import { useParams } from "react-router";

function PetDetail() {
  const [pet, setPet]= useState()
  const {id} = useParams()

  useEffect(()=>{
    const getOnePet = async (id) =>{
      const pet = await petService.show(id)
      console.log(pet)
      setPet(pet)
    }
    getOnePet(id)
  },[id])

  if(!id) return <h1>Loading...</h1>
  if (!pet  ) return <h1>Loading...</h1>


  return (
    <div>
      <h1>Pet Details</h1>
      <h2>Name: {pet.name}</h2>
      <h2>Age: {pet.age}</h2>
      <h2>Breed: {pet.breed}</h2>
    </div>
  )
}

export default PetDetail