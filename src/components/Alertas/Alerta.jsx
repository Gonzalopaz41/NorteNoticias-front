import React from "react"

const Alerta = ({alerta}) => {
 
  return (
    <div className={`${alerta.error ? 'from-red-300 to-red-600' : 'from-indigo-400 to-indigo-600'} bg-gradient-to-r text-center rounded-xl uppercase text-white font-bold text-sm p-2`}>
      {alerta.msg}
    </div>
  )
}

export default Alerta