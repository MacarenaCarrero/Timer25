const date = new Date();
const hourElement = document.getElementById('hour');
const dayWeekElement = document.getElementById('dayWeek');
const minElement = document.getElementById('min');
const secondsElement = document.getElementById('seconds');
const yearElement = document.getElementById('year');

const drawHour = () => {
  hourElement.textContent = date.getHours();
  minElement.textContent = date.getMinutes();
};
drawHour();

const drawDate = () => {
  dayWeekElement.textContent = date.getDate();
  yearElement.textContent = date.getFullYear();
};
drawDate();
const getMin = setInterval(() => {}, 1000);
