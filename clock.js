const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Data();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const second = date.getSecond();
  clockTitle.innerText = `${hours}:${minutes}`;
}

function init() {
  getTime();
};


init();
