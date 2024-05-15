const validarFecha = (date_string) => {
  if (!date_string) {
    return new Date();
  }
  let dateAux;

  if (/-/g.test(date_string)) {
    dateAux = new Date(date_string);
  } else if (/ /g.test(date_string)) {
    dateAux = new Date(date_string);
  } else {
    dateAux = new Date(Number(date_string));
  }

  if (dateAux.getTime() === null || dateAux.toUTCString() === "Invalid Date") {
    dateAux = 0;
  }

  return dateAux;
};

const timeStamp = (date) => {
  const dateAux = validarFecha(date);

  if (dateAux === 0) {
    return { error: "Invalid Date" };
  }

  // Obtener la marca de tiempo UNIX (en milisegundos)
  const marcaTiempoUnix = dateAux.getTime();

  // Obtener la fecha en formato UTC
  const fechaUTC = dateAux.toUTCString();

  return { unix: marcaTiempoUnix, utc: fechaUTC };
};

module.exports = timeStamp;
