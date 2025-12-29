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

export {index}; 
