const newPerson = (fullName) => `${fullName}@trybe.com`

const newEmployees = (newPerson) => {
    const employees = {
      id1: `Nome: Pedro Guerra -> ${newPerson('Pedro Guerra')}`, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: `Nome: Luiza Drumond -> ${newPerson('Luiza Drumond')}`, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: `Nome: Carla Paiva -> ${newPerson('Carla Paiva')}`, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(newPerson));

  