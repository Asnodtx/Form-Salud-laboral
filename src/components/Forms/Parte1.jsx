import React, { useState } from "react";
import { PreguntasArray } from "../../textos/preguntas"; // Asegúrate de que la ruta sea correcta
import CustomSelect from "../CustomSelect"; // Asegúrate de que la ruta sea correcta
import "../Ui/PersonalInfoForm.css";
import EmployeeIdentForm from "./static/EmployeeIdentForm";

const Parte1 = ({ step, setStep }) => {
  const [respuestas, setRespuestas] = useState(
    Array(PreguntasArray.length).fill(""),
  );

  const setRespuestaFunc = (index, value) => {
    const newRespuestas = [...respuestas];
    newRespuestas[index] = value;
    setRespuestas(newRespuestas);
  };

  return (
    <div className="form-container">
      <h1>Datos Descriptivos de la Persona</h1>
      <div id="arreglo">
        <EmployeeIdentForm />
        {PreguntasArray.map((pregunta, i) => (
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
          onClick={(e) => setStep(step + 1)}
        >
          {"siguiente"}
        </button>
      </div>
    </div>
  );
};

export default Parte1;
