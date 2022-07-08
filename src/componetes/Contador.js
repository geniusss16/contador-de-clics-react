import React from "react"; /* inportamos primero el react para los componectes */
import "../hojas-de-estilos/Contador.css"
function Contador({ numClics }) {
  return ( 
    <div className="contador">
      {numClics}
    </div>
  );
} 

export default Contador;
