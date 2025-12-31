import { useState } from "react"
import * as petService from "../../services/petService"
import { useNavigate } from "react-router";


const PetForm = (props) => {
    const { updatePets } = props;

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: '',
        age: 0,
        breed: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target
        const newForm = { ...form, [name]: value }
        setForm(newForm)

    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const payload = { ...form }
        payload.age = Number(payload.age)

        const data = await petService.create(payload)
        if (data) {
            updatePets(data)
            navigate('/')
        } else {
            console.log('something went wrong')
        }
    }

    return (
        <div>
            <h1>Pet Form</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={handleChange} value={form.name} />

                <label htmlFor="age">Age:</label>
                <input type="number" name="age" id="age" min={0} onChange={handleChange} value={form.age} />

                <label htmlFor="breed">Breed:</label>
                <input type="text" name="breed" id="breed" onChange={handleChange} value={form.breed} />

                <button type="submit">Create Pet</button>
            </form>

        </div>
    )
}

export default PetForm