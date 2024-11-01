import { useState } from "react";
import { AuditivoOcularPreguntasArray } from "../../textos/preguntas"; // Asegúrate de que la ruta sea correcta
import CustomSelect from "../CustomSelect"; // Asegúrate de que la ruta sea correcta
import "../Ui/PersonalInfoForm.css";

console.log("Renderizando Parte10");
console.log(AuditivoOcularPreguntasArray);

const Parte10 = ({ step, setStep }) => {
  const [respuestas, setRespuestas] = useState(
    Array(AuditivoOcularPreguntasArray.length).fill(""),
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
      <h1>Sistema Auditivo y Ocular</h1>
      <div id="arreglo">
        {AuditivoOcularPreguntasArray.map((pregunta, i) => (
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

export default Parte10;
