import { useState } from "react";
import { MantenimientoAlimentosPreguntasArray } from "../../textos/preguntas"; // Asegúrate de que la ruta sea correcta
import CustomSelect from "../CustomSelect"; // Asegúrate de que la ruta sea correcta
import "../Ui/PersonalInfoForm.css";

console.log("Renderizando Parte8");
console.log(MantenimientoAlimentosPreguntasArray);

const Parte8 = ({ step, setStep }) => {
  const [respuestas, setRespuestas] = useState(
    Array(MantenimientoAlimentosPreguntasArray.length).fill(""),
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
    <div className="form-container">
      <form onSubmit={handlePersonalInfoSubmit}>
        <h1>Mantenimiento del Aporte Suficiente de Alimentos</h1>
        <div id="arreglo">
          {MantenimientoAlimentosPreguntasArray.map((pregunta, i) => (
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
    </div>
  );
};

export default Parte8;
