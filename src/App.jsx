import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import RutaProtegida from './layout/RutaProtegida'

import Login from './pages/login'
import Registro from './pages/Registro'
import OlvidePassword from './pages/OlvidePassword'
import ConfimarCuenta from './pages/ConfimarCuenta'
import NuevoPassword from './NuevoPassword'
import AdministrarPacientes from './pages/AdministrarPacientes'
import CambiarPassword from './pages/CambiarPassword'
import EditarPerfil from './pages/EditarPerfil'

import { AuthProvider } from './context/AuthProvider'
import { PacientesProvider } from './context/PacientesProvider'


function App() {


  return (

<BrowserRouter>       

  <AuthProvider>
    <PacientesProvider>
    {/*Rutas no protegidas por token, son de accesp publico*/}
      <Routes>
        <Route path='/' element={<AuthLayout/>} > 
          <Route index element={<Login />} /> 
          <Route path='registrar'element={<Registro/>} /> 
          <Route path='confirmar/:token' element={<ConfimarCuenta/>} /> 
          <Route path='olvide-password' element={<OlvidePassword/>} /> 
          <Route path='olvide-password/:token' element={<NuevoPassword/>} /> 


        </Route>
    {/*Rutas de acceso privado donde el usuairo solo puede entrar si esta autenticado*/}
      <Route path='/admin' element={<RutaProtegida/>}>
        <Route index element={<AdministrarPacientes/>}/>
        <Route path='perfil' element={<EditarPerfil/>}/>
        <Route path='cambiar-password' element={<CambiarPassword/>}/>
      </Route>
    

      </Routes>
      </PacientesProvider>
  </AuthProvider>
</BrowserRouter>

  )
}

export default App
