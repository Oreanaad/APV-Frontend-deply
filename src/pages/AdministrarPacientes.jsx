import { useState } from "react"
import Fromulario from "../components/Fromulario"
import ListadoPacientes from "../components/ListadoPacientes"


const AdministrarPacientes = () => {

  const[mostrarForm, setMostrarForm] = useState(false)
  return (

<div className="flex flex-col md:flex-row">
  <button 
    type= 'button'
    className="bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden"
    //Si dejamos como callback va a aesperar a que sceda el click para luego llamar la funcion
    onClick={() => setMostrarForm(!mostrarForm)}>
      
      {mostrarForm ? 'Ocultar formulario' : 'Mostrar formulario'}
  </button>
    <div className={`${mostrarForm ? 'block': 'hidden'}  md:block md:w-1/2 lg:w-2/5`}>
          <Fromulario/>
      </div>

    <div className="md:w-1/2 lg:w-3/5">
          <ListadoPacientes/>
    </div>
</div>
  )
}

export default AdministrarPacientes