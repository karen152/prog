import axios from "axios";//npm i axios
//coneccion al puerto de node---puerto backend
const API='http:localhost:3001';
export const solicitud= user => axios.post('${API}/visitas', user);