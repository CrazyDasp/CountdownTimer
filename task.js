const timer = document.getElementById("timer");

hour = timer.textContent.split(":")[0];
minute = timer.textContent.split(":")[1];
seconds = timer.textContent.split(":")[2];

let checkTime = function(arg) { // Проверка на соответствие формату времени
  if (arg < 10) {
    return "0" + arg;
  };
  return arg;
};
console.log(hour, minute, seconds);

let checkTimeFormat = function(value) {
  value = +value;
  if (value > 60) {
    return 59;
  };
  
  return value;
};

hour = +hour;
minute = checkTimeFormat(+minute);
seconds = checkTimeFormat(+seconds)

console.log(hour, minute, seconds);

let timerInterval = setInterval(() => {
  seconds;
  if (seconds == -1) {
    minute--;
    seconds = 59;
  };
  
  if (minute == -1) {
    hour--;
    minute = 59;
  };
 
  timer.textContent = `${ checkTime(hour) }:${ checkTime(minute) }:${ checkTime(seconds) }`;
  
  seconds--;
  
  if (timer.textContent == "00:00:00") {
    clearInterval(timerInterval);
    
    setTimeout(() => {
      
      document.location.assign("https://99px.ru/sstorage/53/2022/10/tmb_345670_420716.jpg?timestamp=1725451924679"); // Вариант с переходом по URL на другую страницу
      
      // alert("You win!"); // Вариант со всплывающим уведомлением о победе
    }, 1000);
    
  };
}, 1000);