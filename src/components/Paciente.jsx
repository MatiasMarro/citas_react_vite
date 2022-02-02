
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

      const{nombre, propietario,email,fecha,sintomas,id} = paciente;

      const handleEliminar = ()=>{
            const respuesta = confirm('Deseas eliminar este paciente?')

            if(respuesta){
                  eliminarPaciente(id)
            }
      }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-md">
    <p className="font-bold mb-3 text-gray-300 uppercase">Nombre: {''} 
          <span className="font-normal normal-case">{nombre}</span>
    </p>

    <p className="font-bold mb-3 text-gray-300 uppercase">Propietario: {''} 
          <span className="font-normal normal-case">{propietario}</span>
    </p>

    <p className="font-bold mb-3 text-gray-300 uppercase">Email: {''} 
          <span className="font-normal normal-case">{email}</span>
    </p>

    <p className="font-bold mb-3 text-gray-300 uppercase">Fecha Alta: {''} 
          <span className="font-normal normal-case">{fecha}</span>
    </p>

    <p className="font-bold mb-3 text-gray-300 uppercase">Sintomas: {''} 
          <span className="font-normal normal-case">{sintomas}</span>
    </p>
    <div className="flex justify-between mt-7">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-md"
            onClick={()=>setPaciente(paciente)}
          >Editar</button>

          <button
            type="button"
            className="py-2 px-10 bg-red-700 hover:bg-indigo-800 text-white font-bold uppercase rounded-md"
            onClick={handleEliminar}
          >Eliminar</button>
    </div>
</div>
  );
};

export default Paciente;
