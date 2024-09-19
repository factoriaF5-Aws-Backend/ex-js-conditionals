import {describe, it} from 'vitest';
import assert from 'node:assert/strict';
import {name, age, isStudent, person, subjects } from './01-Variables.js';
import {checkEvenOdd, calculateGrade, isLeapYear, checkNumberSign, checkVotingEligibility, getDayOfWeek, classifyAge} from './02-Conditionals.js';


describe('Variable Declaration', function() {
    it('should have a name that is a string', function() {
        assert.equal(typeof name, 'string');
    });
    //---------------------
    it('should have an age that is a number', function() {
        assert.equal(typeof age, 'number');
    });
    //---------------------
    it('should have isStudent as a boolean', function() {
        assert.equal(typeof isStudent, 'boolean');
    });
    //---------------------
    it('should have person as an object', function() {
        assert.equal(typeof person, 'object');
        assert.equal(person.name, name);
        assert.equal(person.age, age);
        assert.equal(person.isStudent, isStudent);
    });
    it('should have subjects as an array', function() {
        assert.equal(Array.isArray(subjects), true);
        assert.equal(subjects.length, 3);
    });
});

describe('Conditionals', function() {
    it('should return "Even" for even numbers', function() {
        assert.equal(checkEvenOdd(4), "Even");
    });

    it('should return "Odd" for odd numbers', function() {
        assert.equal(checkEvenOdd(7), "Odd");
    });
    //---------------------
    it('should return "A" for scores 90 and above', function() {
        assert.equal(calculateGrade(95), "A");
    });

    it('should return "B" for scores between 80 and 89', function() {
        assert.equal(calculateGrade(85), "B");
    });

    it('should return "C" for scores between 70 and 79', function() {
        assert.equal(calculateGrade(75), "C");
    });

    it('should return "D" for scores between 60 and 69', function() {
        assert.equal(calculateGrade(65), "D");
    });

    it('should return "F" for scores below 60', function() {
        assert.equal(calculateGrade(50), "F");
    });
    //---------------------
    it('should return true for leap years', function() {
        assert.equal(isLeapYear(2000), true);
        assert.equal(isLeapYear(2020), true);
    });

    it('should return false for non-leap years', function() {
        assert.equal(isLeapYear(1900), false);
        assert.equal(isLeapYear(2021), false);
    });
    //---------------------
    it('should return "Child" for ages 0-12', function() {
        assert.equal(classifyAge(5), "Child");
    });

    it('should return "Teenager" for ages 13-19', function() {
        assert.equal(classifyAge(16), "Teenager");
    });

    it('should return "Adult" for ages 20-64', function() {
        assert.equal(classifyAge(30), "Adult");
    });

    it('should return "Senior" for ages 65 and above', function() {
        assert.equal(classifyAge(70), "Senior");
    });
    //---------------------
    it('should return "Positive" for numbers greater than 0', function() {
        assert.equal(checkNumberSign(10), "Positive");
    });

    it('should return "Negative" for numbers less than 0', function() {
        assert.equal(checkNumberSign(-5), "Negative");
    });

    it('should return "Zero" for the number 0', function() {
        assert.equal(checkNumberSign(0), "Zero");
    });
    //---------------------
    it('should return "Eligible" for ages 18 and above', function() {
        assert.equal(checkVotingEligibility(18), "Eligible");
        assert.equal(checkVotingEligibility(25), "Eligible");
    });

    it('should return "Not Eligible" for ages below 18', function() {
        assert.equal(checkVotingEligibility(17), "Not Eligible");
        assert.equal(checkVotingEligibility(15), "Not Eligible");
    });
    //---------------------
    it('should return the correct day of the week', function() {
        assert.equal(getDayOfWeek(1), "Sunday");
        assert.equal(getDayOfWeek(2), "Monday");
        assert.equal(getDayOfWeek(3), "Tuesday");
        assert.equal(getDayOfWeek(4), "Wednesday");
        assert.equal(getDayOfWeek(5), "Thursday");
        assert.equal(getDayOfWeek(6), "Friday");
        assert.equal(getDayOfWeek(7), "Saturday");
    });
   
    it('should return "Invalid day number" for numbers outside 1-7', function() {
        assert.equal(getDayOfWeek(0), "Invalid day number");
        assert.equal(getDayOfWeek(8), "Invalid day number");
    });
});


