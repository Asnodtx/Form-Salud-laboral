/*  { pregunta: "Nombre(s):", opciones: [], tipo: "texto" },
  { pregunta: "Apellidos:", opciones: [], tipo: "texto" },
  { pregunta: "Fecha:", opciones: [], tipo: "fecha" },
  { pregunta: "Edad:", opciones: [], tipo: "edad" },
*/

export default function EmployeeIdentForm() {
  async function handleEmployeeSubmit(evt) {
    evt.preventDefault();
    const temp = {
      nombre: evt.target.nombre.value,
      apellidoMaterno: evt.target.apellidoMaterno.value,
      apellidoPaterno: evt.target.apellidoPaterno.value,
      edad: evt.target.edad.value,
      empresa: {
        id: evt.target.ide.value,
      },
    };
    console.log(temp);
    const r = await fetch("http://127.0.0.1:8080/trabajador", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(temp),
    });
    // const j = r.json()
    console.log({ ...r });
  }
  return (
    <div>
      <form id="emp-form" key={"e-f"} onSubmit={(e) => handleEmployeeSubmit(e)}>
        <label style={{ display: "block" }}>{"EMPLEADO"}</label>

        <input type="text" name="nombre" placeholder="nombre de empleado" />
        <hr />
        <input type="text" name="apellidoPaterno" placeholder="paterno" />
        <hr />
        <input type="text" name="apellidoMaterno" placeholder="materno" />
        <hr />
        <input type="number" name="edad" placeholder="edad" />
        <hr />
        <input type="text" name="ide" placeholder="id empresa" />
        <hr />
        <button type="submit">{"Enviar a Java Spring"}</button>
      </form>
    </div>
  );
}
