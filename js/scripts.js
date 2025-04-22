const hoursElement = document.getElementById('hours');
const dayNameWeekElement = document.getElementById('dayWeek');
const dayNumberWeekElement = document.getElementById('dayNumberWeek');
const nameMonthElement = document.getElementById('nameMonth');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');
const yearElement = document.getElementById('year');
const drawHoursElement = document.getElementById('drawHours');
const drawDatesElement = document.getElementById('drawDates');

const drawHour = () => {
  const date = new Date();
  let hoursElement = date.getHours();
  let minutesElement = date.getMinutes();
  let secondsElement = date.getSeconds();

  hoursElement = hoursElement < 10 ? '0' + hoursElement : hoursElement;
  minutesElement = minutesElement < 10 ? '0' + minutesElement : minutesElement;
  secondsElement = secondsElement < 10 ? '0' + secondsElement : secondsElement;

  drawHoursElement.textContent = `${hoursElement}:${minutesElement}`;
};

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
  let dayNameWeekElement = days[date.getDay()];
  let dayNumberWeekElement = date.getDate();
  let nameMonthElement = months[date.getMonth()];
  let yearElement = date.getFullYear();

  drawDatesElement.textContent = `${dayNameWeekElement} ${dayNumberWeekElement} ${nameMonthElement} ${yearElement}`;
};

setInterval(() => {
  drawHour();
  getDate();
}, 1000);
drawHour();
getDate();
