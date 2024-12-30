import PropTypes from 'prop-types';

const Alerta = ({ alerta }) => {

  return (
    <div className={`${alerta.error ? ' bg-red-600' : 'bg-indigo-700'}  text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}>
      {alerta.msg}
    </div>
  );
};

Alerta.propTypes = {
  alerta: PropTypes.shape({
    error: PropTypes.bool.isRequired,
    msg: PropTypes.string.isRequired,
  }).isRequired,
};

export default Alerta;