import React from "react";
import PropTypes from "prop-types";

export default function CustomSelect({
  pregunta,
  opcionesArray = [],
  respuesta,
  setRespuestaFunc,
}) {
  return (
    <>
      <h3>{pregunta}</h3>
      {opcionesArray.length === 0 ? (
        pregunta.toLowerCase().includes("fecha") ? (
          <input
            type="date"
            value={respuesta}
            onChange={(e) => setRespuestaFunc(e.target.value)}
          />
        ) : pregunta.toLowerCase().includes("edad") ? (
          <input
            type="number"
            min="0"
            max="100"
            value={respuesta}
            onChange={(e) => setRespuestaFunc(e.target.value)}
            placeholder="Ingresa tu edad"
          />
        ) : (
          <input
            type="text"
            value={respuesta}
            onChange={(e) => setRespuestaFunc(e.target.value)}
            placeholder={`Ingresa ${pregunta.toLowerCase()}`}
          />
        )
      ) : (
        <select
          value={respuesta}
          onChange={(e) => setRespuestaFunc(e.target.value)}
        >
          <option value="">Seleccione</option>
          {opcionesArray.map((opcion, i) => (
            <option value={opcion.valor} key={i}>
              {opcion.valor}
            </option>
          ))}
        </select>
      )}
    </>
  );
}

CustomSelect.propTypes = {
  pregunta: PropTypes.string.isRequired,
  opcionesArray: PropTypes.arrayOf(
    PropTypes.shape({
      valor: PropTypes.string.isRequired, // ahora se espera un objeto con una propiedad 'valor'
    }),
  ),
  respuesta: PropTypes.string.isRequired,
  setRespuestaFunc: PropTypes.func.isRequired,
};
