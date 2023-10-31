import axios from "axios"

const baseURL = "https://localhost:44395/api/"

export const getAllDatas = async () => {
    try {
        const res = await axios.get(`${baseURL}Tdl`)
        console.log(res.data)
        return res.data;
    } catch (e) {
        return e
    }
}