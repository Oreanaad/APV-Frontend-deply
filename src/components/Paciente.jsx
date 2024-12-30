import PropTypes from 'prop-types';
import usePacientes from '../hooks/usePacientes'; 





const Paciente = ({ paciente }) => {

  const{setEdicion, eliminarPaciente}=  usePacientes()

  const { email, fechaAlta, nombre, sintomas, propietario, _id } = paciente;


  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    return new Intl.DateTimeFormat('es-ES', { dateStyle: 'long' }).format(nuevaFecha);
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold uppercase text-indigo-800 my-2">
        Nombre: <span className="font-normal normal-case text-black">{nombre}</span>
      </p>

      <p className="font-bold uppercase text-indigo-800 my-2">
        Propietario: <span className="font-normal normal-case text-black">{propietario}</span>
      </p>

      <p className="font-bold uppercase text-indigo-800 my-2">
        Email del propietario: <span className="font-normal normal-case text-black">{email}</span>
      </p>

      <p className="font-bold uppercase text-indigo-800 my-2">
        Fecha de ingreso: <span className="font-normal normal-case text-black">{formatearFecha(fechaAlta)}</span>
      </p>

      <p className="font-bold uppercase text-indigo-800 my-2">
        Sintomas: <span className="font-normal normal-case text-black">{sintomas}</span>
      </p>

      <div className='flex justify-between my-5'>
        <button
        type='button'
        className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg'
        onClick={()=>setEdicion(paciente)}
        >
            Editar
        </button>

        <button
        type='button'
        className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg'
        onClick={()=> eliminarPaciente(_id)}
        >
            Eliminar
        </button>

      </div>
    </div>
  );
};

Paciente.propTypes = {
  paciente: PropTypes.shape({
    email: PropTypes.string.isRequired,
    fechaAlta: PropTypes.string.isRequired, // Assuming fechaAlta is received as a string
    nombre: PropTypes.string.isRequired,
    sintomas: PropTypes.string.isRequired,
    propietario: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired, // Assuming _id is a string
  }).isRequired,
};

export default Paciente;