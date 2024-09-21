import { describe, it } from "vitest";
import assert from "node:assert/strict";
import {
  checkEvenOdd,
  calculateGrade,
  isLeapYear,
  checkNumberSign,
  checkVotingEligibility,
  getDayOfWeek,
  classifyAge,
} from "../src/02-conditionals.js";

// Tests para checkEvenOdd
describe("checkEvenOdd", function () {
  it('should return "Even" for even numbers', function () {
    assert.equal(checkEvenOdd(4), "Even");
    assert.equal(checkEvenOdd(0), "Even"); // Prueba con 0, que es par
  });

  it('should return "Odd" for odd numbers', function () {
    assert.equal(checkEvenOdd(7), "Odd");
    assert.equal(checkEvenOdd(-1), "Odd"); // Prueba con número negativo impar
  });
});

// Tests para calculateGrade
describe("calculateGrade", function () {
  it('should return "A" for scores 90 and above', function () {
    assert.equal(calculateGrade(95), "A");
    assert.equal(calculateGrade(100), "A"); // Prueba con el valor máximo
  });

  it('should return "B" for scores between 80 and 89', function () {
    assert.equal(calculateGrade(85), "B");
    assert.equal(calculateGrade(80), "B"); // Prueba con el límite inferior de "B"
  });

  it('should return "C" for scores between 70 and 79', function () {
    assert.equal(calculateGrade(75), "C");
    assert.equal(calculateGrade(70), "C"); // Prueba con el límite inferior de "C"
  });

  it('should return "D" for scores between 60 and 69', function () {
    assert.equal(calculateGrade(65), "D");
    assert.equal(calculateGrade(60), "D"); // Prueba con el límite inferior de "D"
  });

  it('should return "F" for scores below 60', function () {
    assert.equal(calculateGrade(50), "F");
    assert.equal(calculateGrade(0), "F"); // Prueba con el valor mínimo
  });

  it('should return "Invalid score" for scores outside the range', function () {
    assert.equal(calculateGrade(-5), "Invalid score");
    assert.equal(calculateGrade(105), "Invalid score");
  });
});

// Tests para isLeapYear
describe("isLeapYear", function () {
  it("should return true for leap years", function () {
    assert.equal(isLeapYear(2000), true);
    assert.equal(isLeapYear(2020), true);
  });

  it("should return false for non-leap years", function () {
    assert.equal(isLeapYear(1900), false);
    assert.equal(isLeapYear(2021), false);
  });
});

// Tests para classifyAge
describe("classifyAge", function () {
  it('should return "Child" for ages 0-12', function () {
    assert.equal(classifyAge(5), "Child");
  });

  it('should return "Teenager" for ages 13-19', function () {
    assert.equal(classifyAge(16), "Teenager");
  });

  it('should return "Adult" for ages 20-64', function () {
    assert.equal(classifyAge(30), "Adult");
  });

  it('should return "Senior" for ages 65 and above', function () {
    assert.equal(classifyAge(70), "Senior");
  });

  it('should return "Invalid age" for negative ages', function () {
    assert.equal(classifyAge(-3), "Invalid age");
  });
});

// Tests para checkNumberSign
describe("checkNumberSign", function () {
  it('should return "Positive" for numbers greater than 0', function () {
    assert.equal(checkNumberSign(10), "Positive");
  });

  it('should return "Negative" for numbers less than 0', function () {
    assert.equal(checkNumberSign(-5), "Negative");
  });

  it('should return "Zero" for the number 0', function () {
    assert.equal(checkNumberSign(0), "Zero");
  });
});

// Tests para checkVotingEligibility
describe("checkVotingEligibility", function () {
  it('should return "Eligible" for ages 18 and above', function () {
    assert.equal(checkVotingEligibility(18), "Eligible");
    assert.equal(checkVotingEligibility(25), "Eligible");
  });

  it('should return "Not Eligible" for ages below 18', function () {
    assert.equal(checkVotingEligibility(17), "Not Eligible");
    assert.equal(checkVotingEligibility(15), "Not Eligible");
  });
});

// Tests para getDayOfWeek
describe("getDayOfWeek", function () {
  it("should return the correct day of the week", function () {
    assert.equal(getDayOfWeek(1), "Sunday");
    assert.equal(getDayOfWeek(2), "Monday");
    assert.equal(getDayOfWeek(3), "Tuesday");
    assert.equal(getDayOfWeek(4), "Wednesday");
    assert.equal(getDayOfWeek(5), "Thursday");
    assert.equal(getDayOfWeek(6), "Friday");
    assert.equal(getDayOfWeek(7), "Saturday");
  });

  it('should return "Invalid day number" for numbers outside 1-7', function () {
    assert.equal(getDayOfWeek(0), "Invalid day number");
    assert.equal(getDayOfWeek(8), "Invalid day number");
  });
});
