export const PreguntasArray = [
  {
    pregunta: "Sexo:",
    opciones: [{ valor: "Masculino" }, { valor: "Femenino" }],
  },
  {
    pregunta: "Estado Civil:",
    opciones: [
      { valor: "Soltero" },
      { valor: "Casado" },
      { valor: "Divorciado" },
      { valor: "Viudo" },
    ],
  },
  {
    pregunta: "Escolaridad:",
    opciones: [
      { valor: "Primaria" },
      { valor: "Secundaria" },
      { valor: "Preparatoria" },
      { valor: "Universidad" },
      { valor: "Maestría" },
      { valor: "Doctorado" },
    ],
  },
  { pregunta: "Empresa:", opciones: [], tipo: "texto" },
  { pregunta: "Folio:", opciones: [], tipo: "texto" },
];

export const AreaTrabajoPreguntasArray = [
  {
    pregunta: "1. Le gustaría que sus hijos trabajaran en lo mismo que usted:",
    opciones: [{ valor: "Si" }, { valor: "No" }],
  },
  {
    pregunta: "2. Le da satisfacción la realización de sus actividades:",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "3. Está interesado en su trabajo:",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "4. Su trabajo le permite desarrollar sus habilidades y destrezas:",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "5. Su trabajo le permite desarrollar su creatividad e iniciativa:",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "6. Su trabajo le permite el aprendizaje de nuevos conocimientos:",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "7. Puede usted decidir sobre cómo realizar su trabajo:",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "8. Puede usted fijar el ritmo de trabajo:",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "9. Sus compañeros son solidarios con usted y valoran su trabajo:",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "10. Su trabajo es importante para sus jefes:",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "11. Faltó al trabajo en los últimos 12 meses (si la respuesta es 'No', pase al siguiente apartado):",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "12. En cuántas ocasiones distintas faltó al trabajo en los últimos 12 meses (independientemente de cuántos días hayan sido en cada ocasión):",
    opciones: [
      { valor: "0 veces" },
      { valor: "1 vez" },
      { valor: "2-3 veces" },
      { valor: "4-5 veces" },
      { valor: "5 o mas veces" },
    ],
  },
  {
    pregunta: "13. En cuántas de esas ocasiones fue por motivo de salud:",
    opciones: [
      { valor: "0 veces" },
      { valor: "1 vez" },
      { valor: "2-3 veces" },
      { valor: "4-5 veces" },
      { valor: "5 o mas veces" },
    ],
  },
  {
    pregunta: "14. Cuántos días del año en total faltó por motivos de salud:",
    opciones: [
      { valor: "0 veces" },
      { valor: "1 vez" },
      { valor: "2-3 veces" },
      { valor: "4-5 veces" },
      { valor: "5 o mas veces" },
    ],
  },
];

export const FactoresSistemaPreguntasArray = [
  {
    pregunta: "Rol que ocupa en la familia: ",
    opciones: [
      { valor: "Padre" },
      { valor: "Madre" },
      { valor: "Hijo" },
      { valor: "Esposa/o" },
      { valor: "Otro" },
    ],
  },
  {
    pregunta: "¿Cuántos hijos tiene?  ",
    opciones: [
      { valor: "0" },
      { valor: "1" },
      { valor: "2" },
      { valor: "3" },
      { valor: "4 o mas" },
    ],
  },
  {
    pregunta: "Relación con la familia:  ",
    opciones: [{ valor: "Buena" }, { valor: "Regular" }, { valor: "Mala" }],
  },
];

export const FactoresSocioEcoPreguntasArray = [
  {
    pregunta: "1. Área o departamento donde trabaja:  ", //abierta
    opciones: [
      { valor: "Administración" },
      { valor: "Recursos Humanos" },
      { valor: "Ventas" },
      { valor: "Marketing" },
      { valor: "Producción" },
      { valor: "Finanzas" },
      { valor: "Logística" },
      { valor: "Atención al Cliente" },
      { valor: "Tecnologías de la Información" },
      { valor: "Investigación y Desarrollo" },
      { valor: "Otros (especificar)" },
    ],
  },
  {
    pregunta: "2. Puesto que ocupa actualmente:  ", //abierta
    opciones: [
      { valor: "Gerente" },
      { valor: "Supervisor" },
      { valor: "Analista" },
      { valor: "Coordinador" },
      { valor: "Ejecutivo" },
      { valor: "Asistente" },
      { valor: "Técnico" },
      { valor: "Operador" },
      { valor: "Administrativo" },
      { valor: "Otros (especificar)" },
    ],
  },
  {
    pregunta: "3. Cuánto tiempo lleva en la empresa:  ", //abierta
    opciones: [
      { valor: "Menos de 6 meses" },
      { valor: "6 meses a 1 año" },
      { valor: "1 a 3 años" },
      { valor: "3 a 5 años" },
      { valor: "5 años" },
      { valor: "6 a 10 años" },
      { valor: "11 a 20 años" },
      { valor: "mas de 20 años" },
    ],
  },
  {
    pregunta: "4. Es trabajador de: confianza ó :  ",
    opciones: [{ valor: "confianza" }, { valor: "sindicalizado" }],
  },
];

export const EstadoSisSaludPreguntasArray = [
  {
    pregunta: "1. ¿Le zumban los oídos?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "2. ¿Durante el último año ha notado que oye menos?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "3. ¿Tiene dificultad para oír a sus compañeros de trabajo a más de un metro de distancia aunque no haya mucho ruido?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "4. ¿Con frecuencia ha tenido molestias a la luz normal durante varios días?",
    opciones: [
      { valor: "Diariamente" },
      { valor: "Alguna vez a la semana" },
      { valor: "Alguna vez al mes" },
      { valor: "Nunca" },
    ],
  },
  {
    pregunta:
      "5. ¿Con qué frecuencia se le irritan los ojos durante varios días?",
    opciones: [
      { valor: "Diariamente" },
      { valor: "Alguna vez a la semana" },
      { valor: "Alguna vez al mes" },
      { valor: "Nunca" },
    ],
  },
  {
    pregunta:
      "6. ¿Le han llorado los ojos o ha tenido comienzo o ardor en varias ocasiones?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "7. ¿Sin tener basura, frecuentemente ha tenido sensación de basura en los ojos en varias ocasiones?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "8. ¿Ha tenido lagañas constantes o supuración en los ojos?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "9. ¿Durante el último año tuvo anginas con fiebre alta más de dos veces?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "10. ¿Durante el último año ha tenido más de cuatro catarros?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "11. ¿Ha tenido escurrimiento o secreción de la nariz de mal olor y color verdoso?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "12. ¿Ha tenido congestión y/o dolor a los lados de la nariz o en la frente?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "13. ¿Estas molestias han durado más de 15 días?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "14. ¿Ha tenido tos en el último año? Si No, pase a la pregunta 17.",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "15. En este caso tosió con flemas.",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "16. Usted ha tosido tres meses o más seguidos o más en el último año.",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "17. Se le reseca la piel frecuentemente.",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "18. Tiene ardor o comezón en la piel.",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "19. Le salen ampollas en alguna parte de su cuerpo.",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "20. Tiene piel con escamas en alguna parte de su cuerpo.",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "21. Le han salido frecuentemente granos con agua o pus o ronchas.",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "22. ¿Se le agrita parte de la piel?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "23. ¿Ha sufrido algún accidente de trabajo durante el último año?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "24. ¿Ha sufrido algún accidente en trayecto durante el último año?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "25. Frecuentemente tiene dificultad para conciliar el sueño",
    opciones: [{ valor: "Siempre" }, { valor: "A veces" }, { valor: "Nunca" }],
  },
  {
    pregunta: "26. Con frecuencia tiene sueño intranquilo",
    opciones: [{ valor: "Siempre" }, { valor: "A veces" }, { valor: "Nunca" }],
  },
  {
    pregunta:
      "27. Se despierta pocas horas después de haberse dormido y ya no se puede volver a dormir",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "28. ¿Ha tenido dolor de cabeza más de dos veces por mes?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "29. ¿El dolor de cabeza se presenta cuando está nervioso o irritable?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "30. ¿El dolor de cabeza es tan fuerte que le impide trabajar?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "31. ¿Está acompañado de náusea o vómito, mareo o visión borrosa?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "32. ¿Antes de que aparezca el dolor tiene sensaciones que le avisan que va a aparecer?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "33. ¿El dolor se presenta solo en un lado de la cabeza?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "¿Ha padecido en el último año alguna lesión en alguna de las siguientes partes del cuerpo que le dificulte o impida trabajar?",
    opciones: [],
  },
  {
    pregunta: "34. Cuello:",
    opciones: [{ valor: "Sin molestias" }, { valor: "Con molestias" }],
  },
  {
    pregunta: "35. Hombro, codos, muñecas o manos:",
    opciones: [{ valor: "Sin molestias" }, { valor: "Con molestias" }],
  },
  {
    pregunta: "36. Espalda, cintura, cadera o asentaderas:",
    opciones: [{ valor: "Sin molestias" }, { valor: "Con molestias" }],
  },
  {
    pregunta: "37. Muslos, rodillas, tobillos o pies:",
    opciones: [{ valor: "Sin molestias" }, { valor: "Con molestias" }],
  },
  {
    pregunta: "38. ¿Ha tenido mucho dolor en la parte baja de la espalda?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "39. ¿En caso afirmativo el dolor se corre a la pierna?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "40. ¿Ha tenido varices en las piernas?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "41. ¿Durante el último año ha tenido hemorroides?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "42. Durante el último año le ha diagnosticado un medico alguna enfermedad: ",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  { pregunta: "¿Cuál?:", opciones: [], tipo: "texto" },
];

export const RequisitosAutoCuidadoPreguntasArray = [
  {
    pregunta:
      "1) ¿Cuántos cigarrillos fuma usted al día? (6=31 o mas, 5=21-30, 4=11-20, 3=menos de 10)",
    opciones: [
      { valor: "3= menos de 10" },
      { valor: "4= 11-20 " },
      { valor: "5= 21-30" },
      { valor: "36= 31 o mas " },
    ],
  },
  {
    pregunta:
      "2) ¿Fuma usted más cigarrillos durante la primera parte del día que durante el resto del día? (1= Si, 0= No )",
    opciones: [{ valor: "1= Si " }, { valor: "10= No " }],
  },
  {
    pregunta:
      "3) ¿Cuánto tiempo transcurre desde que Ud. Despierta hasta que fuma el primer cigarrillo? ",
    opciones: [
      { valor: "0= Más de 60 min " },
      { valor: "1= 31-60 min" },
      { valor: "2= 6-30 min " },
      { valor: "3= Menos de 5 min" },
    ],
  },
  {
    pregunta: "4) ¿Qué cigarrillo le es más difícil omitir (dejar de fumar)? ",
    opciones: [
      { valor: "1= El primero de la mañana" },
      { valor: "0=Algún otro" },
    ],
  },
  {
    pregunta: "5) ¿Le es difícil no fumar donde está prohibido?  ",
    opciones: [{ valor: "1=Si " }, { valor: "0=No " }],
  },
  {
    pregunta: "6) ¿Le es difícil no fumar donde está prohibido?  ",
    opciones: [{ valor: "1=Si " }, { valor: "0=No " }],
  },
];

export const SistemaCardiovascularPreguntasArray = [
  { pregunta: "Peso (kg):", opciones: [], tipo: "texto" },
  { pregunta: "Talla (cm):", opciones: [], tipo: "texto" },
  { pregunta: "TA 1er. toma (mmHg):", opciones: [], tipo: "texto" },
  { pregunta: "TA 2da. toma (mmHg):", opciones: [], tipo: "texto" },
  { pregunta: "IMC:", opciones: [], tipo: "texto" },
  { pregunta: "TA promedio (mmHg):", opciones: [], tipo: "texto" },
  {
    pregunta: "Clasificación:",
    opciones: [
      "Normal",
      "Prehipertensión",
      "Hipertensión etapa 1",
      "Hipertensión etapa 2",
    ],
    tipo: "selección",
  }, // Selección

  {
    pregunta: (
      <>
        CUESTIONARIO DE FACTORES DE RIESGO <br />
        <br />
        Bajo riesgo DM igual o mayor a 10 puntos ; Alto riesgo DM=≥ 10 puntos{" "}
        <br />
        <br />
        1. ¿Alguno de sus hermanos padece o padeció diabetes mellitus? SI=1
      </>
    ),
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
  {
    pregunta:
      "2. ¿Alguno de sus padres padece o padeció diabetes mellitus? Si=1 ",
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
  {
    pregunta: "3. Mujer. ¿Ha tenido algún bebe con más de 4kg al nacer? SI=1 ",
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
  {
    pregunta:
      "4. ¿Presenta al menos 2 de los siguientes datos? Mucha sed, orina mucho o tiene mucha hambre. ",
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
  {
    pregunta: "5. Su IMC se ubica en: normal=0, sobrepeso=5, obeso=10.",
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
  {
    pregunta: "6. Cintura mujer>=80cm y hombre >=90cm. SI=10",
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
  {
    pregunta:
      "7. Normalmente hace poco o nada de ejercicio (solo menor de 65 años) SI=5",
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
  {
    pregunta: "8. Tiene entre 45-64 años. SI=5",
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
  {
    pregunta: "9. Tiene 65 o más años de edad. SI=9",
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
];

export const MantenimientoAlimentosPreguntasArray = [
  {
    pregunta: "¿En su área de trabajo cuenta con servicio de comedor? ",
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
  {
    pregunta:
      "¿Considera que el servicio cuenta con las medidas higiénicas necesarias? ",
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
  {
    pregunta:
      "¿Considera que el servicio le proporciona una alimentación saludable y balanceada? ",
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
  {
    pregunta:
      "¿En su área de trabajo cuenta con algún espacio para degustar sus alimentos si es que no usa el servicio de comedor? ",
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
];

export const ActividadReposoPreguntasArray = [
  {
    pregunta: "1. Realiza esfuerzo físico muy pesado ",
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
  {
    pregunta: (
      <>
        Su puesto de trabajo lo obliga a realizar movimientos que requieren
        fuerza con alguna de las siguientes partes del cuerpo
        <br /> <br />
        2. Hombros, brazos o manos
      </>
    ),
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
  {
    pregunta: "3. Espalada o cintura ",
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
  {
    pregunta: "4. Piernas ",
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
  {
    pregunta: (
      <>
        Su puesto de trabajo lo obliga a:
        <br /> <br />
        5. Levantar objetos desde el nivel del piso
      </>
    ),
    opciones: [{ valor: "Si " }, { valor: "No " }],
  },
  {
    pregunta:
      "6. Levantar objetos desde alturas que están entre rodillas y pecho",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "7. Levantar objetos a alturas por arriba de los hombros",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "8. Cargar, empujar o jalar objetos hasta 5 kilos",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "9. Cargar, empujar o jalar objetos de 6 a 15 kilos",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "10. Cargar, empujar o jalar objetos de 16 a 30 kilos",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "11. Cargar, empujar o jalar objetos de más de 30 kilos",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "12. Usar herramientas manuales como martillo, cuchillo o pinza",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "13. Usar herramienta como pico, pala, machete o marro",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "14. Adoptar posiciones incomodas o forzadas",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "15. ¿Realiza movimientos con los brazos por encima o detrás de los hombros?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "16. ¿Para realizar su trabajo usted requiere estar encorvado?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "17. ¿El trabajo incluye movimientos repetitivos de las manos o tiene que abrir excesivamente los dedos o torcerlos?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "18. Realiza movimientos de rotación de la cintura",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "19. Al realizar su trabajo los hombros están tensos",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "20. Tiene que torcer o mantener tensa la o las muñecas para trabajar",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "21. Realiza movimientos repetidos como para mover una manivela para atornillar o enroscar",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "22. El peso del cuerpo recae solo en uno de los pies o en una pierna (sin posibilidad de descansar el pie en un escalón o periquera)",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "23. Utiliza pedales u otros mecanismos con los pies o las rodillas.",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "24. Utiliza algún asiento sin respaldo o es incómodo",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "25. Los dispositivos o pedales son inestables o están mal colocados",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "26. Permanece de pie para trabajar",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "27.Para trabajar permanece sentado",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "28. La superficie donde se sienta es incómoda",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "29. Al estar sentado, no es posible apoyar los pies en algún lado",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "30. Para realizar su trabajo debe permanecer en cuclillas o arrodillado",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
];

export const AuditivoOcularPreguntasArray = [
  {
    pregunta: (
      <>
        El trabajador presenta:
        <br /> <br />
        Problemas para Escuchar ¿Cuál?
      </>
    ),
    opciones: [{ valor: "Si " }, { valor: "No " }, { valor: "A veces" }],
  },
  { pregunta: "¿Cuál?", opciones: [], tipo: "texto" },
  {
    pregunta:
      "Su equipo de protección personal está adaptado a sus necesidades auditivas o visuales:",
    opciones: [{ valor: "Si" }, { valor: "No" }],
  },
  {
    pregunta: "¿Necesita apoyo para Escuchar?",
    opciones: [{ valor: "Si" }, { valor: "No" }],
  },
  {
    pregunta: "¿Necesita apoyo para ver?",
    opciones: [{ valor: "Si" }, { valor: "No" }],
  },
  {
    pregunta: "¿Cuál?",
    opciones: [
      { valor: "Lentes Correctivos" },
      { valor: "Gafas de Sol" },
      { valor: "Lentes de Contacto" },
      { valor: "Lupa" },
      { valor: "Pantallas con Aumento" },
      { valor: "Dispositivos de Lectura" },
      { valor: "Aplicaciones de Aumento de Texto" },
      { valor: "Pantallas de Alta Resolución" },
      { valor: "Otros" },
    ],
  },
  {
    pregunta: "¿Desde cuándo?",
    opciones: [{ valor: "Especificar fecha" }],
  },
];

export const PrevencionPeligrosPreguntasArray = [
  {
    pregunta: (
      <>
        Hombres 8-15 Fuerte probabilidad de daño. mayor a 15 probable
        dependencia. mayor 20 dependencia. <br />
        Mujeres 7-13 Fuerte probabilidad de daño. mayor a 13 probable
        dependencia. mayor 20 dependencia.
        <br />
        <br />
        1. ¿Con qué frecuencia consume alguna bebida alcohólica?
      </>
    ),

    opciones: [
      { valor: "Nunca (0) - Pase a las preguntas 9-10" },
      { valor: "Una o menos veces al mes (1)" },
      { valor: "De 2 a 4 veces al mes (2)" },
      { valor: "De 2 a 3 veces a la semana (3)" },
      { valor: "4 o más veces a la semana (4)" },
    ],
  },
  {
    pregunta:
      "2. ¿Cuántas consumiciones de bebidas alcohólicas suele realizar en un día de consumo normal?",

    opciones: [
      { valor: "1 o 2 (0)" },
      { valor: "3 o 4 (1)" },
      { valor: "5 o 6 (2)" },
      { valor: "7, 8 o 9 (3)" },
      { valor: "10 o más (4)" },
    ],
  },
  {
    pregunta:
      "3. ¿Con qué frecuencia toma 6 o más bebidas alcohólicas en un solo día?",
    opciones: [
      { valor: "Nunca (0)" },
      { valor: "Menos de una vez al mes (1)" },
      { valor: "Mensualmente (2)" },
      { valor: "Semanalmente (3)" },
      {
        valor:
          "A diario o casi a diario (4) - Pase a las preguntas 9 y 10 si la suma total de las preguntas 2 y 3 = 0",
      },
    ],
  },
  {
    pregunta:
      "4. ¿Con qué frecuencia en el curso del último año ha sido incapaz de parar de beber una vez había empezado?",
    opciones: [
      { valor: "Nunca (0)" },
      { valor: "Menos de una vez al mes (1)" },
      { valor: "Mensualmente (2)" },
      { valor: "Semanalmente (3)" },
      { valor: "A diario o casi a diario (4)" },
    ],
  },
  {
    pregunta:
      "5. ¿Con qué frecuencia en el curso del último año no pudo hacer lo que se esperaba de usted porque había bebido?",
    opciones: [
      { valor: "Nunca (0)" },
      { valor: "Menos de una vez al mes (1)" },
      { valor: "Mensualmente (2)" },
      { valor: "Semanalmente (3)" },
      { valor: "A diario o casi a diario (4)" },
    ],
  },
  {
    pregunta:
      "6. ¿Con qué frecuencia en el curso del último año ha necesitado beber en ayunas para recuperarse después de haber bebido mucho el día anterior?",
    opciones: [
      { valor: "Nunca (0)" },
      { valor: "Menos de una vez al mes (1)" },
      { valor: "Mensualmente (2)" },
      { valor: "Semanalmente (3)" },
      { valor: "A diario o casi a diario (4)" },
    ],
  },
  {
    pregunta:
      "7. ¿Con qué frecuencia en el curso del último año ha tenido remordimientos o sentimientos de culpa después de haber bebido?",
    opciones: [
      { valor: "Nunca (0)" },
      { valor: "Menos de una vez al mes (1)" },
      { valor: "Mensualmente (2)" },
      { valor: "Semanalmente (3)" },
      { valor: "A diario o casi a diario (4)" },
    ],
  },
  {
    pregunta:
      "8. ¿Con qué frecuencia en el curso del último año no ha podido recordar lo que sucedió la noche anterior porque había estado bebiendo?",
    opciones: [
      { valor: "Nunca (0)" },
      { valor: "Menos de una vez al mes (1)" },
      { valor: "Mensualmente (2)" },
      { valor: "Semanalmente (3)" },
      { valor: "A diario o casi a diario (4)" },
    ],
  },
  {
    pregunta:
      "9. ¿Usted o alguna otra persona ha resultado herido porque usted había bebido?",
    opciones: [
      { valor: "No (0)" },
      { valor: "Sí, pero no en el curso del último año (1)" },
      { valor: "Sí, el último año (2)" },
    ],
  },
  {
    pregunta:
      "10. ¿Algún familiar, amigo, médico o profesional sanitario ha mostrado preocupación por su consumo de bebidas alcohólicas o le han sugerido que deje de beber?",
    opciones: [
      { valor: "No (0)" },
      { valor: "Sí, pero no en el curso del último año (1)" },
      { valor: "Sí, el último año (2)" },
    ],
  },
];

export const FactoresAmbientalesPreguntasArray = [
  {
    pregunta: (
      <>
        En su área de trabajo se encuentra expuesto a:
        <br />
        <br />
        1. Calor
      </>
    ),

    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "2. Frío",
    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "3. Cambios bruscos de temperatura",
    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "4.Falta de ventilación",
    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "5. Humedad",
    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "6. Poca iluminación ",
    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "7. Mucha iluminación",
    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "8. Ruido ",
    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "9. Vibraciones",
    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "10. Radiaciones de soldar",
    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "11. Rayos X",
    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: (
      <>
        En su área de trabajo está usted constantemente en contacto con:
        <br />
        <br />
        12. Contaminantes biológicos infecciosos (virus, bacterias,hongos)
      </>
    ),

    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "13. Animales ponzoñosos (víboras, alacranes, abejas) ",
    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "14. Palomas u otras aves ",
    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "16. Humos",
    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "17. Gases o vapores",
    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "18. Líquidos (disolventes o ácidos",
    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: (
      <>
        En su puesto de trabajo tiene condiciones muy peligrosas debidoa:
        <br />
        <br />
        19. Los pisos, techos, paredes, rampas o escaleras
      </>
    ),

    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta:
      "20. La falta de guardas, protecciones o dispositivos, de paro de emergencia en las máquinas",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "21. Las herramientas que utiliza (de mano, eléctricas o neumáticas)",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "22. Las instalaciones (eléctricas, neumáticas o de gas)",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "23. La operación, mantenimiento o limpieza de las máquinas o equipos",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "24. El manejo, transporte y almacenamiento de materiales y sustancias peligrosas",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "25. Los equipos de soldadura y corte",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "26. Las compresoras o calderas en el área de labores",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "27. La falta de equipos o personal para la prevención, protección o combate contra incendios",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "28. La falta de orden o limpieza",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "29. La falta de equipo de protección personal o el deficiente mantenimiento. ",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: (
      <>
        En su trabajo tiene condiciones insalubres o falta de higiene en:
        <br />
        <br />
        30. Las instalaciones sanitarias (baños, regaderas o vestidores)
      </>
    ),

    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "31. En el comedor y los alimentos ",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "32. El agua para beber ",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: (
      <>
        Su puesto de trabajo lo obliga a:
        <br />
        <br />
        33. Jornada semanal mayor de 48 hrs.
      </>
    ),

    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta:
      "34. Realizar trabajos pendientes en horas o días de descanso o vacaciones",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "35. Rotación de turnos",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "36. Trabajando nocturno",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "37. No poder desatender su tarea por más de 5 minutos",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "38. Mucha concentración para no accidentarse",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "39. Realizar una tarea muy minuciosa",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "40. Un trabajo repetitivo. Si NO, pase a la pregunta 43",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "41. El conjunto de tareas que realiza se repite por lo menos cada medio minuto",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "42. El conjunto de tareas que realiza se repite por lo menos entre medio minuto y 5 minutos",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "43. Cubrir una cuota de producción",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "44. Realizar un trabajo a destajo",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "45. Soportar una supervisión estricta",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "46. Un estricto control de calidad",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "47. Estar en comunicación con sus compañeros",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "48. Trabajar en un espacio reducido",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "49. Estar fijo en su lugar de trabajo",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "50. Realizar un trabajo aburrido",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "51. Ejecutar un trabajo peligroso",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "52. Ejecutar un trabajo denigrante",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "53. Recibir órdenes confusas y muy pocas claras de su jefe",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "54. Realizar algún trabajo que le puede ocasionar daño a su salud",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "55. Realizar esfuerzo físico muy pesado",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "1. En su área de trabajo existe algún método o sistema para recibir atención médica o primeros auxilios en caso de ser necesario. ",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "2. Conoce algún programa de salud que se aplique en su empresa. Si No, pase al siguiente apartado. ",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "3. Participa en alguno de ellos",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
];

export const PromocionHumanoPreguntasArray = [
  {
    pregunta: (
      <>
        ESCALA DE ESTRÉS PERCIBIDO
        <br />
        <br />
        1.- En el último mes ¿Con qué frecuencia ha estado afectado por algo que
        ocurrió inesperadamente?
      </>
    ),

    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta:
      "2. En el último mes, ¿Con qué frecuencia se ha sentido incapaz de controlar las cosas de su vida?",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
  },
  {
    pregunta:
      "3. En el último mes, ¿Con qué frecuencia se ha sentido nervioso o estresado?",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
  },
  {
    pregunta:
      "4. En el último mes, ¿Con qué frecuencia ha manejado con éxito los pequeños problemas irritantes de la vida?",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
  },
  {
    pregunta:
      "5. En el último mes, ¿Con qué frecuencia ha tenido remordimientos o sentimientos de culpa después de haber bebido?",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
  },
  {
    pregunta:
      "6. En el último mes, ¿Con qué frecuencia ha sentido incapacidad para recordar lo que sucedió la noche anterior porque había estado bebiendo?",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
  },
  {
    pregunta:
      "7. En el último mes, ¿Con qué frecuencia ha podido controlar las dificultades de su vida?",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
  },
  {
    pregunta:
      "8. En el último mes, ¿Con qué frecuencia ha podido controlar el tiempo?",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
  },
  {
    pregunta:
      "9. En el último mes, ¿Con qué frecuencia ha sentido que las dificultades se acumulan tanto que no puede superarlas?",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
  },
  {
    pregunta:
      "10. En el último mes, ¿Con qué frecuencia ha estado preocupado por su salud?",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
  },
  {
    pregunta:
      "11. En el último mes, ¿Con qué frecuencia se ha sentido impotente ante los problemas?",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
  },
  {
    pregunta:
      "12. En el último mes, ¿Con qué frecuencia ha tenido problemas para dormir?",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
  },
  {
    pregunta:
      "13. En el último mes, ¿Con qué frecuencia ha sentido que no puede concentrarse?",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
  },
  {
    pregunta:
      "14. En el último mes, ¿Con qué frecuencia ha sentido que no puede disfrutar de las cosas?",
    opciones: [
      { valor: "Nunca" },
      { valor: "Casi nunca" },
      { valor: "De vez en cuando" },
      { valor: "A menudo" },
      { valor: "Muy a menudo" },
    ],
  },
  {
    pregunta: (
      <>
        ESCALA DE ANSIEDAD DE GOLDBERG
        <br />
        <br />
        <br />
        TOTAL ANSIEDAD: mayor a 4
        <br />
        <br />
        1. ¿Se ha sentido muy excitado, nervioso o en tensión?
      </>
    ),

    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "2. ¿Se ha sentido muy irritable?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "3. ¿Ha tenido dificultad para relajarse? (Si hay 2 o más respuestas afirmativas, continuar preguntando)",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "4. ¿Ha dormido mal, ha tenido dificultades para dormir?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "5. ¿Ha tenido dolores de cabeza o nuca?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "6. ¿Ha tenido alguno de los siguientes síntomas: temblores, hormigueos, mareos, sudores, diarrea? (síntomas vegetativos)",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "7. ¿Ha estado preocupado por su salud?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "8. ¿Ha tenido alguna dificultad para conciliar el sueño, para quedarse dormido?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: (
      <>
        ESCALA DE DEPRESIÓN DE GOLDBERG
        <br />
        <br />
        <br />
        TOTAL DEPRESIÓN: mayor a 3
        <br />
        <br />
        1. ¿Se ha sentido con poca energía?
      </>
    ),

    opciones: [{ valor: "si" }, { valor: "no" }],
  },
  {
    pregunta: "2. ¿Ha perdido usted su interés por las cosas?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "3. ¿Ha perdido la confianza en sí mismo?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "4. ¿Se ha sentido usted desesperanzado, sin esperanzas? (Si hay respuestas afirmativas a cualquiera de las preguntas anteriores, continuar)",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "5. ¿Ha tenido dificultades para concentrarse?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "6. ¿Ha perdido peso? (a causa de su falta de apetito)",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "7. ¿Se ha estado despertando demasiado temprano?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta: "8. ¿Se ha sentido usted enlentecido?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
  {
    pregunta:
      "9. ¿Cree usted que ha tenido tendencia a encontrarse peor por las mañanas?",
    opciones: [{ valor: "Sí" }, { valor: "No" }],
  },
];
