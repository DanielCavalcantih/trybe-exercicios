const { sum, myRemove, myFizzBuzz } = require("./sum");

describe("Função Sum", () => {
  it("A soma de 4 e 5 é igual a 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  it("A soma de 0 e 0 é igual a 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("Um dos parâmetros for uma string", () => {
    expect(() => {
      sum(2, "5");
    }).toThrow();
  });
});

describe("Função myRemove", () => {
  it("Verifica se retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 3, 4]);
  });

  it("Verifica se retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 6, 4]);
  });

  it("Verifica se retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe("Função myFizzBuzz", () => {
    
})
