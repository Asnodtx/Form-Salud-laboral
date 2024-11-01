import { useState } from "react";
import { PrevencionPeligrosPreguntasArray } from "../../textos/preguntas"; // Asegúrate de que la ruta sea correcta
import CustomSelect from "../CustomSelect"; // Asegúrate de que la ruta sea correcta
import "../Ui/PersonalInfoForm.css";

console.log("Renderizando Parte11");
console.log(PrevencionPeligrosPreguntasArray);

const Parte11 = ({ step, setStep }) => {
  const [respuestas, setRespuestas] = useState(
    Array(PrevencionPeligrosPreguntasArray.length).fill(""),
  );

  const setRespuestaFunc = (index, value) => {
    const newRespuestas = [...respuestas];
    newRespuestas[index] = value;
    setRespuestas(newRespuestas);
  };

  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    console.log(respuestas);
  };

  return (
    <form onSubmit={handlePersonalInfoSubmit} className="form-container">
      <h1>Prevención de Peligros para la Vida</h1>
      <div id="arreglo">
        {PrevencionPeligrosPreguntasArray.map((pregunta, i) => (
          <CustomSelect
            key={i}
            pregunta={pregunta.pregunta}
            opcionesArray={pregunta.opciones}
            respuesta={respuestas[i]}
            setRespuestaFunc={(value) => setRespuestaFunc(i, value)}
            tipo={pregunta.tipo}
          />
        ))}
      </div>
      <div className="button-container">
        <button
          type="button"
          className="button"
          onClick={(e) => {
            setStep(step - 1);
          }}
        >
          {"atras"}
        </button>
        <button
          type="button"
          className="button"
          onClick={(e) => {
            setStep(step + 1);
          }}
        >
          {"siguiente"}
        </button>
      </div>
    </form>
  );
};

export default Parte11;
