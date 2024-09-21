import { assert, describe, it } from "vitest";
import {
  name,
  age,
  isAdult,
  city,
  birthYear,
  firstName,
  lastName,
  fullName,
  stringNumber,
  convertedNumber,
  sum,
  difference,
  a,
  b,
  numbers,
  firstNumber,
  lastNumber,
  multiply,
  person,
  message,
} from "../src/01-basic.js";

describe("Ex 1: Variable Declaration", function () {
  it("should declare the variable name as a string", function () {
    assert.typeOf(name, "string");
  });

  it("should declare the variable age as a number", function () {
    assert.typeOf(age, "number");
  });

  it("should declare the variable isAdult as a boolean", function () {
    assert.typeOf(isAdult, "boolean");
    assert.equal(isAdult, true);
  });
});

describe("Ex 2: Variable Assignment", function () {
  it("should assign a string value to city", function () {
    assert.typeOf(city, "string");
  });

  it("should assign a number value to birthYear", function () {
    assert.typeOf(birthYear, "number");
  });
});

describe("Ex 3: String Concatenation", function () {
  it("should concatenate firstName and lastName correctly", function () {
    assert.typeOf(firstName, "string");
    assert.typeOf(lastName, "string");
    assert.typeOf(fullName, "string");
    assert.equal(fullName, firstName + " " + lastName);
  });
});

describe("Ex 4: Type Conversion", function () {
  it("should convert stringNumber to a number", function () {
    assert.typeOf(stringNumber, "string");
    assert.typeOf(convertedNumber, "number");
  });
});

describe("Ex 5: Mathematical Operations", function () {
  it("should correctly calculate the sum of a and b", function () {
    assert.typeOf(a, "number");
    assert.typeOf(b, "number");
    assert.equal(sum, a + b);
  });

  it("should correctly calculate the difference between a and b", function () {
    assert.typeOf(a, "number");
    assert.typeOf(b, "number");
    assert.equal(difference, a - b);
  });
});

describe("Ex 6: Array Manipulation (Ejercicio 6)", function () {
  it("should contain 5 numbers in the array numbers", function () {
    assert.equal(numbers.length, 5);
  });

  it("should point firstNumber to the first element of the array numbers", function () {
    assert.equal(firstNumber, 1);
  });

  it("should point lastNumber to the last element of the array numbers", function () {
    assert.equal(lastNumber, numbers[numbers.length - 1]);
    assert.equal(lastNumber, 5);
  });

  it("should change the first element of the numbers array to 0", function () {
    assert.equal(numbers[0], 0);
  });
});

describe("Ex 7: Multiply Function (Ejercicio 7)", function () {
  it("should return the correct product of two numbers", function () {
    assert.equal(multiply(2, 3), 6);
    assert.equal(multiply(5, 5), 25);
    assert.equal(multiply(10, -2), -20);
  });

  it("should return 0 if one of the numbers is 0", function () {
    assert.equal(multiply(0, 10), 0);
    assert.equal(multiply(100, 0), 0);
  });
});

describe("Ex 8: Object Creation (Ejercicio 8)", function () {
  it("should create a message with correct properties", function () {
    assert.equal(
      message,
      `${person.name}, de ${person.age} años, vive en ${person.city}.`
    );
  });

  it("should have the correct types for each property in the person object", function () {
    assert.typeOf(person.name, "string");
    assert.typeOf(person.age, "number");
    assert.typeOf(person.city, "string");
    assert.typeOf(person.isAdult, "boolean");
    assert.typeOf(person.fullName, "string");
  });
});
