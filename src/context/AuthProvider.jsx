import {useState, useEffect, createContext} from 'react'
import PropTypes from 'prop-types'
import clienteAxios from '../config/axios'

//En este authcontext es donde van a vivir los datos
const AuthContext = createContext()


const AuthProvider = ({children}) =>{

    const[cargando, setCargando]=useState(true)
    const [auth, setAuth]= useState({})


    useEffect(()=>{

        const autenticarUsuario = async ()=>{
            const token = sessionStorage.getItem('token')

            if(!token){
                setCargando(false)
                return;
            }

            //Crea el header de configuracion para poder empezar a hacer las rutas protegidas que se crean despues de autenticar el usuario
            const config ={
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const{data}= await clienteAxios('/veterinarios/perfil', config)

                setAuth(data)
            } catch (error) {
                setAuth({})
                console.log(error)
            }
            setCargando(false)
        }

        autenticarUsuario()
    },[])

    const cerrarSesion = ()=>{
        localStorage.removeItem('token')
        setAuth({})
    }

    const actualizarPerfil = async datos =>{

        const token = sessionStorage.getItem('token')

        if(!token){
            setCargando(false)
            return;
        }
        console.log(datos)
        //Crea el header de configuracion para poder empezar a hacer las rutas protegidas que se crean despues de autenticar el usuario
        const config ={
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
    }

    try {
        const url= `/veterinarios/perfil/${datos._id}`
        await clienteAxios.put(url, datos, config)
        
        return{
          msg: 'Almacenado correctamente'  
        }
    } catch (error) {
            return{
                msg: error.response.data.msg,
                error: true
            }
    }

    }

    const guardarPassword= async(datos)=>{
        const token = sessionStorage.getItem('token')

        if(!token){
            setCargando(false)
            return;
        }
        console.log(datos)
        //Crea el header de configuracion para poder empezar a hacer las rutas protegidas que se crean despues de autenticar el usuario
        const config ={
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
    } 

    try {
        const url = 'veterinarios/actualizar-password'
        const {data} = await clienteAxios.put(url, datos, config)
        console.log(data)
        return{
            msg: data.msg
        }
    } catch (error) {
       return{

       msg: error.response.data.msg,
       error: true
    }}
    }


    return(
       < AuthContext.Provider
       value={{
            auth,
            setAuth,
            cargando,
            cerrarSesion,
            actualizarPerfil,
            guardarPassword
       }}
       >
        {children}
       </AuthContext.Provider>
    )
}


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
export {
    AuthProvider
}

export default AuthContext