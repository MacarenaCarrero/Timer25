//digital
const hoursDigElement = document.getElementById('hoursDig');
const minsDigElement = document.getElementById('minsDig');
const secondsDigElement = document.getElementById('secondsDig');
//fecha
const dayWeekElement = document.getElementById('dayWeek');
const dayNumberWeekElement = document.getElementById('dayNumberWeek');
const nameMonthElement = document.getElementById('nameMonth');
const yearElement = document.getElementById('year');
//
const digitalClockElement = document.getElementById('digitalClock');
// const drawDatesElement = document.getElementById('drawDates');

//agujas analógico
const needleSecond = document.getElementById('needleSecond');
const needleMinute = document.getElementById('needleMinute');
const needleHour = document.getElementById('needleHour');

//
const drawHour = () => {
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  //digitl
  hoursDigElement.textContent = hours < 10 ? '0' + hours : hours;
  minsDigElement.textContent = minutes < 10 ? '0' + minutes : minutes;
  secondsDigElement.textContent = seconds < 10 ? '0' + seconds : seconds;

  digitalClockElement.textContent = `${hours}:${minutes}:${seconds}`;
  // reloj   formulas para los grados de rotate
  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

  needleSecond.style.transform = `rotate(${secondDeg}deg)`;
  needleMinute.style.transform = `rotate(${minuteDeg}deg)`;
  needleHour.style.transform = `rotate(${hourDeg}deg)`;
};

// fecha
const getDate = () => {
  const date = new Date();

  const days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ];
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  dayWeekElement.textContent = days[date.getDay()];
  dayNumberWeekElement.textContent = date.getDate();
  nameMonthElement.textContent = months[date.getMonth()];
  yearElement.textContent = date.getFullYear();
};

// aqui se actualiza al intervalo que le de
setInterval(() => {
  drawHour();
  getDate();
}, 1000);

// llamar a las funciones
drawHour();
getDate();
