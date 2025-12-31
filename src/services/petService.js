import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

const index = async () => {
    try {
        const res = await axios.get(BASE_URL)
        return res.data.pets 
    } catch (error) {
        console.log(error)
    }
};

const show = async (id) =>{
    try {
        const res = await axios.get(`${BASE_URL}/${id}`)
        return res.data.pet
    } catch (error) {
    console.log(error)

    }
}

const create = async (formData) =>{
    try {
      const res = await axios.post(BASE_URL, formData)  
      return res.data.pet
    } catch (error) {
    console.log(error)

    }
}
export {index, show, create}; 
