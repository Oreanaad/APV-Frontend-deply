import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'
import clienteAxios from '../config/axios'
import useAuth from "../hooks/useAuth";



const PacientesContext = createContext()

export const PacientesProvider =({children})=>{

    const[pacientes, setPacientes]= useState([])
    const[paciente, setPaciente]=useState({})
    const {auth} = useAuth()

    useEffect(()=>{
        const obtenerPacientes = async () =>{

        try {
            const token = sessionStorage.getItem('token')
            if(!token) return

            const config={
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const {data} = await clienteAxios('/pacientes', config)
            setPacientes(data)
        } catch (error) {
            console.log(error)
        }
        }
        obtenerPacientes()
    }, [auth])

    const guardarPaciente = async (paciente) =>{

        const token = sessionStorage.getItem('token')
                const config={
                    headers:{
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

        if(paciente.id){
            try {
                const {data} = await clienteAxios.put(`/pacientes/${paciente.id}`, paciente, config)

                const pacientesActualizado = pacientes.map(pacienteState => pacienteState._id === data._id ? data : pacienteState)

                setPacientes(pacientesActualizado)

            } catch (error) {
                console.log(error)
            }


        }else{


            try {
                
                const {data} = await clienteAxios.post('/pacientes', paciente, config)
                const{...pacienteAlmacenado} = data

                setPacientes([pacienteAlmacenado, ...pacientes])
            } catch (error) {
                console.log(error)
            }
        }
        
        
           
    }

    const setEdicion = (paciente) =>{
        setPaciente(paciente)
    }

    const eliminarPaciente = async id =>{
        const  confirmar = confirm('Confirmas que deseas eliminar?')

        if(confirmar){
            try {
                const token = sessionStorage.getItem('token')
                if(!token) return
    
                const config={
                    headers:{
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const{ data } = await clienteAxios.delete(`/pacientes/${id}`, config )

                const pacientesActualizado= pacientes.filter(pacientesState => pacientesState._id !== id)

                setPacientes(pacientesActualizado)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
    }


    return(
        <PacientesContext.Provider
            value={{
                pacientes,
                guardarPaciente,
                setEdicion,
                paciente,
                eliminarPaciente
                
            }}
            >
            {children}
        </PacientesContext.Provider>
    )
}


PacientesProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PacientesContext