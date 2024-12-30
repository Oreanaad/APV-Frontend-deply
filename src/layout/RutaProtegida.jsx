import { Outlet, Navigate } from 'react-router-dom';
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import useAuth from '../hooks/useAuth'
{/*Outlet se usa para inyectar la infomacion en una pagina desde otra, en este caso se inyecta en admin todo lo de administrarpaciente*/}
const RutaProtegida = () => {

    const{auth, cargando} = useAuth()

    console.log(auth)
    console.log(cargando)

    if(cargando) return 'cargando...'


  return (
   <>
    {/*Redirecciona al login cuando intentamos entrar al admin sin autenticar*/}
    <Header/>
        {auth?._id ? (
          <main className='container mx-auto mt-10'>
            <Outlet/></main> ): <Navigate to='/'/>}
    <Footer/>


   </>
  )
};

export default RutaProtegida