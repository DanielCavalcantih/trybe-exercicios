function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const holidays = [24, 25, 31];

const fridays = [4, 11, 18, 25];

let fridayHoliday = 0;

for(let index = 0;index < fridays.length ; index += 1){
  if(fridays[index].includes = holidays){
    fridayHoliday = fridays[index];
  }
}

const days = document.getElementById('days');

for(let index = 0;index < dezDaysList.length;index += 1){
  let li = document.createElement('li');
  
  li.classList = 'day';

  for(let index2 = 0; index2 < holidays.length;index2 += 1){
    if(holidays[index2] === dezDaysList[index]){
      li.classList = 'day holiday'
    }
  }
  for(let index3 = 0;index3 < fridays.length;index3 += 1){
    if(fridays[index3] === dezDaysList[index]){
      li.classList = 'day friday'
    }
  }

  if(dezDaysList[index] === fridayHoliday){
    li.classList = 'day holiday friday';
  }

  li.innerHTML = dezDaysList[index];
  days.appendChild(li);
}

function createButton(Feriados){
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = 'Feriados'
  let divButtons = document.querySelector('.buttons-container');
  divButtons.appendChild(button);
  button.addEventListener('click', mudarCorHoliday)
  function mudarCorHoliday(){
    let holiday = document.querySelectorAll('.holiday');
    for(let index = 0 ; index < holiday.length ; index += 1){
      holiday[index].style.background = 'lightgreen';
    };
  };
}

createButton();

function mudarCor(){
  document.getElementById('btn-holiday').addEventListener('click', retornarCor);
  function retornarCor(){
    let holiday = document.querySelectorAll('.holiday');
    for(let index = 0 ; index < holiday.length ; index += 1){
      holiday[index].style.background = 'rgb(238,238,238)';
    }
  } 
}

let day = document.querySelectorAll('.day');
for(let index = 0;index < day.length ; index += 1){
  if(day[index].style.background === 'lightgreen'){
    mudarCor();
  }
}









