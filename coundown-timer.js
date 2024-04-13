const nameOfMonths = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveAway = document.querySelector('.giveaway');
const deadline = document.getElementById('deadline');
const dHMS = document.querySelectorAll('.deadline-format h4');

// setting up template date

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 5, 11, 59, 0);
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = nameOfMonths[futureDate.getMonth()];
const date = futureDate.getDate();
const weekDay = daysOfWeek[futureDate.getDay()];

giveAway.textContent = `Giveaway Ends On ${weekDay}, ${date} ${month} ${year} ${hour}:${minutes} am`;

const futureTime = futureDate.getTime();

function countDown() {
  const today = new Date().getTime();
  const diffTime = futureTime - today;
  const oneSecond = 1000;
  const oneMinute = 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneDay = 24 * 60 * 60 * 1000;

  let days = Math.floor(diffTime / oneDay);
  let hours = Math.floor((diffTime % oneDay) / oneHour);
  let minutes = Math.floor((diffTime % oneHour) / oneMinute);
  let seconds = Math.floor((diffTime % oneMinute) / oneSecond);

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  //   Destructuring my variable as Array
  const value = [days, hours, minutes, seconds];
  dHMS.forEach(function (item, index) {
    item.innerHTML = format(value[index]);
    if (diffTime < 0) {
      clearInterval(timerCount);
      deadline.innerHTML = `<h3 class="fw-semibold info-text">Sorry, Giveaway expired!!!</h3>`;
      console.log(deadline);
    }
  });
}

// setting the Timer so it keep showing our seconds
const timerCount = setInterval(countDown, 1000);

countDown();
