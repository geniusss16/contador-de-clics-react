import "./App.css";
import Boton from "./componetes/Boton";
import freeCodeCampLogo from "./imagenes/freecode.jpg";
function App() {
  const manejarClic = () => {
    console.log("Clic");
  };

  const reiniciarContador = () => {
    console.log("Reiniciar");
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo de freeCodeCamp"
        />
      </div>
      <div>
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
