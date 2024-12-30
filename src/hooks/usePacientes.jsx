import {useContext} from 'react'
import PacientesContext from '../context/PacientesProvider'


//En el useContext es como extraemos los datos e importamos AuthPacientes para que sepa de donde viene los datos

const usePacientes = ()=>{
return useContext(PacientesContext)
}

export default usePacientes

