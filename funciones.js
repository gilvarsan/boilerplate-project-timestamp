const validarFecha = (date) => {
  let dateAux;
  if (!date) {
    dateAux = new Date();
  } else if (date.length === 13) {
    dateAux = new Date(parseInt(date));
  } else if (date.length === 10) {
    dateAux = new Date(date);
  } else {
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
