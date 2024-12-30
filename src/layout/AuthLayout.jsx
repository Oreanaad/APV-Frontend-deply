//rafce nos permite crear la estructura basica de un componente 
//<></> fragment

import {Outlet} from 'react-router-dom'

const AuthLayout = () => {
  return (
        <>
        
        <main className='container mx-auto md:grid md:grid-cols-2 mt-12 gap-28 p-5 items-center'>
        { <Outlet/>  /*se una para reservar un espacio para los componentes que forman parte de los hijos de AuthLayout  */}
     

        </main>
        </>

  )
}

export default AuthLayout


