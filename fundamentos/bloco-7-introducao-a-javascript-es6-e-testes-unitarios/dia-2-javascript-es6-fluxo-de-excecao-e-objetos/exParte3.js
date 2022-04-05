const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addTurn = (objeto, chave, valor) => objeto[chave] = valor;
  addTurn(lesson2, 'turno', 'noite');

//   console.log(lesson2);

  const listKeys = (objeto) => Object.keys(objeto);
  
//   console.log(listKeys(lesson3));

  const objectSize = (objeto) => Object.keys(objeto).length;

//   console.log(objectSize(lesson2)); 

  const valuesOfObject = (objeto) => Object.values(objeto);

//   console.log(valuesOfObject(lesson1));

const allLessons = {}
allLessons['lesson1'] = lesson1;
allLessons['lesson2'] = lesson2;
allLessons['lesson3'] = lesson3;

// console.log(allLessons);

const totalStudents = (students) => {
  let totalStudents = 0;
  totalStudents = allLessons['lesson1']['numeroEstudantes'] + allLessons['lesson2']['numeroEstudantes'] + allLessons['lesson3']['numeroEstudantes']
  return totalStudents;
}

// console.log(totalStudents());

const valueOfKey = (lesson, chave) => {
  let arrayObj = Object.entries(lesson);
  for (let index = 0;index < arrayObj.length;index++){
    if(index === chave){
      let result = arrayObj[index];
      return result[1];
    }
  }
}

// console.log(valueOfKey(lesson1, 0))


