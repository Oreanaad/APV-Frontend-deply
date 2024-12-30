import {useContext} from 'react'
import AuthContext from '../context/AuthProvider'


//En el useContext es como extraemos los datos e importamos AuthConext para que sepa de donde viene los datos

const useAuth = ()=>{
return useContext(AuthContext)
}

export default useAuth

