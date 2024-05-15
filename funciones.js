const validarFecha = (date) => {
  if (!date) {
    return new Date();
  }
  let dateAux;
  const regexs = [/^\d+$/, /\d{3}-\d{2}-\d{2}/];

  if (regexs[0].test(date)) {
    dateAux = new Date(Number(date));
  } else if (regexs[1].test(date)) {
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
