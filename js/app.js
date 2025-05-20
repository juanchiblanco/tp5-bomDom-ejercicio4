const obtenerReloj = () => {
  const fecha = new Date();

  const semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const detalleFecha = document.querySelector("h2");
  detalleFecha.textContent = `${semana[fecha.getDay()]} ${fecha.getDate()} de ${
    meses[fecha.getMonth()]
  } de ${fecha.getFullYear()}`;

  let horas, minutos, segundos;

  if (fecha.getHours() < 10) {
    horas = `0${fecha.getHours()}`;
  } else {
    horas = fecha.getHours();
  }
  if (fecha.getMinutes() < 10) {
    minutos = `0${fecha.getMinutes()}`;
  } else {
    minutos = fecha.getMinutes();
  }
  if (fecha.getSeconds() < 10) {
    segundos = `0${fecha.getSeconds()}`;
  } else {
    segundos = fecha.getSeconds();
  }

  const detalleHora = document.querySelector(".fs-1");
  detalleHora.textContent = `${horas}:${minutos}:${segundos}`;
};

setInterval(obtenerReloj, 1000);
