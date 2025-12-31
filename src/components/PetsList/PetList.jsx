import { Link } from "react-router"

const PetList = ({pets}) => {
  return (
 <div>
      <h1>Pet List</h1>
    {
     !pets.length ? 
        <h2>No Pets Yet!</h2>
      : 
     <ul>
        {
            pets.map(
                (onePet) => (
                <li key={onePet._id}>{onePet.name}
                <Link to={`/pets/${onePet._id}`}>  {onePet.name}</Link>  

                </li>
                )

            )
        }
     </ul>}
    </div> 
     )
}

export default PetList