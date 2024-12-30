import axios from "axios";

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
})

export default clienteAxios

//Estamos reemplazando el import axios de las opaginas de regristro por este docuemnto donde importamos axios itself y luego agregamos la ruta del back hasta api que es la que usualmente se usa para cortar el codigo y luego solo poner ej : /veterinarios, sabiendo que el servidor lo leera como : http://localhost:4000/api/veterinarios