const myList = ['Daniel', 2, 'Isadora'];

// escreva swap abaixo

const swap = (array) => {
  array = [array[2], array[0]];
  return array;
}

console.log(swap(myList));