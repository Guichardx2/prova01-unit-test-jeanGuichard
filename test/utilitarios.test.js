const Utilitarios = require("../src/utilitarios");

describe("Teste para a classe Utilitarios", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios();
  });

  test("Deve inverter uma string colocando-a de trás para frente", () => {
    const input = "teste";
    const expected = "etset";
    const result = utilitarios.inverterString(input);
    expect(result).toBe(expected);
  });

  test("Deve contar os caracteres de uma string", () => {
    const input = "Sushi";
    const expected = 5;
    const result = utilitarios.contarCaracteres(input);
    expect(result).toBe(expected);
  });

  test("Deve converter uma string para letras maiúsculas", () => {
    const input = "maiúsculas";
    const expected = "MAIÚSCULAS";
    const result = utilitarios.paraMaiusculas(input);
    expect(result).toBe(expected);
  });

  test("Deve converter uma string para letras minúsculas", () => {
    const input = "MINÚSCULAS";
    const expected = "minúsculas";
    const result = utilitarios.paraMinusculas(input);
    expect(result).toBe(expected);
  });

  test("Deve converter o primeiro caractere de uma string para maiúsculo", () => {
    const input = "teste";
    const expected = "Teste";
    const result = utilitarios.primeiraLetraMaiuscula(input);
    expect(result).toBe(expected);
  });

  test("Deve somar dois números", () => {
    const a = 12;
    const b = 20;
    const expected = 32;
    const result = utilitarios.somar(a, b);
    expect(result).toBe(expected);
  });

  test("Deve subtrair dois números", () => {
    const a = 35;
    const b = 12;
    const expected = 23;
    const result = utilitarios.subtrair(a, b);
    expect(result).toBe(expected);
  });

  test("Deve multiplicar dois números", () => {
    const a = 35;
    const b = 20;
    const expected = 700;
    const result = utilitarios.multiplicar(a, b);
    expect(result).toBe(expected);
  });

  test("Deve dividir dois números", () => {
    const a = 6;
    const b = 3;
    const expected = 2;
    const result = utilitarios.dividir(a, b);
    expect(result).toBe(expected);
  });

  test("Deve lançar erro ao dividir por zero", () => {
    const a = 5;
    const b = 0;
    expect(() => utilitarios.dividir(a, b)).toThrow("Divisão por zero");
  });

  test("Deve verificar se um número é par", () => {
    const num = 4;
    const result = utilitarios.ehPar(num);
    expect(result).toBe(true);
  });

  test("Deve retornar o primeiro elemento de um array", () => {
    const array = [5, 10, 15];
    const expected = 5;
    const result = utilitarios.primeiroElemento(array);
    expect(result).toBe(expected);
  });

  test("Deve retornar o último elemento de um array", () => {
    const array = [5, 10, 15];
    const expected = 15;
    const result = utilitarios.ultimoElemento(array);
    expect(result).toBe(expected);
  });

  test("Deve retornar o tamanho de um array", () => {
    const array = [5, 22, 15, 13, 6, 9];
    const expected = 6;
    const result = utilitarios.tamanhoArray(array);
    expect(result).toBe(expected);
  });

  test("Deve ordenar um array", () => {
    const arrayNums = [15, 5, 10];
    const expectedNums = [10, 15, 5];

    const arrayStrings = ["Banana", "Maça", "Cereja", "Laranja"];
    const expectedStrings = ["Banana", "Cereja", "Laranja", "Maça"];

    const resultNums = utilitarios.ordenarArray(arrayNums);
    const resultStrings = utilitarios.ordenarArray(arrayStrings);

    expect(resultNums).toEqual(expectedNums);
    expect(resultStrings).toEqual(expectedStrings);
  });

  test("Deve inverter um array", () => {
    const array = [5, 10, 15];
    const expected = [15, 10, 5];
    const result = utilitarios.inverterArray(array);
    expect(result).toEqual(expected);
  });

  test("Deve gerar um número aleatório ", () => {
    const result = utilitarios.gerarNumeroAleatorio();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(100);
  });

  test("Deve verificar se é um número", () => {
    const input = 529;
    const result = utilitarios.ehNumero(input);
    expect(result).toBe(true);
  });

  test("Deve remover os espaços de uma string", () => {
    const input = "  sem espaços  ";
    const expected = "sem espaços";
    const result = utilitarios.removerEspacos(input);
    expect(result).toBe(expected);
  });

  test("Deve repetir um texto N vezes", () => {
    const input = "teste";
    const vezes = 3;
    const expected = "testetesteteste";
    const result = utilitarios.repetirTexto(input, vezes);
    expect(result).toBe(expected);
  });

  test("Deve juntar um array em uma string", () => {
    const input = ["teste1", "teste2", "teste3"];
    const expected = "teste1,teste2,teste3";
    const result = utilitarios.juntarArray(input);
    expect(result).toBe(expected);
  });

  test("Deve contar as palavras de uma string", () => {
    const input = "palavra1 palavra2 palavra3";
    const expected = 3;
    const result = utilitarios.contarPalavras(input);
    expect(result).toBe(expected);
  });

  test("Deve calcular a média de um array de números", () => {
    const array = [10, 20, 30];
    const expected = 20;
    const result = utilitarios.mediaArray(array);
    expect(result).toBe(expected);
  });

  test("Deve retornar 0 se o array estiver vazio", () => {
    const array = [];
    const expected = 0;
    const result = utilitarios.mediaArray(array);
    expect(result).toBe(expected);
  });

  test("Deve remover os elementos duplicados de um array", () => {
    const array = [1, 2, 2, 3, 4, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    const result = utilitarios.removerDuplicados(array);
    expect(result).toEqual(expected);
  });

  test("Deve verificar se uma string é palíndroma", () => {
    const input = "arara";
    const expected = true;
    const result = utilitarios.ehPalindromo(input);
    expect(result).toBe(expected);
  });

  test("Deve juntar dois objetos", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const expected = { a: 1, b: 2, c: 3, d: 4 };
    const result = utilitarios.mesclarObjetos(obj1, obj2);
    expect(result).toEqual(expected);
  });
});
