function Cliente({cliente}) {
  const { nombre, empresa, email, telefono, id } = cliente

  return (
    <tr>
      <td className='p-6 space-y-2'>
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">Email: </span> {email} </p>
        <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">Tel: </span> {telefono} </p>
      </td>
      <td className="p-6 flex gap-3">
        <button
          type="button"
          className="text-blue-700 hover:text-blue-800 uppercase font-bold text-xs"
        >
          Editar
        </button>
        <button
          type="button"
          className="text-red-700 hover:text-red-800 uppercase font-bold text-xs"
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default Cliente