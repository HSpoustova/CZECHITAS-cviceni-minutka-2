'use strict';
const startuj = (event) => {
  event.preventDefault();
  let time = Number(document.querySelector('.time-input').value);
  const sec = document.querySelector('.alarm__seconds');
  const alarm = document.querySelector('.alarm');

  sec.textContent = String(time);

  const odpocet = () => {
    if (time > 0) {
      time -= 1;
      sec.textContent = String(time);

      return;
    }
    if (time <= 0) {
      clearInterval(casovac);
      alarm.classList.add('alarm--ring');
      document.querySelector('audio').play();
    }
  };
  const casovac = setInterval(odpocet, 1000);
};

const start = document.querySelector('.controls');
start.addEventListener('submit', startuj);
