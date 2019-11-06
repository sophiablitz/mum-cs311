"use strict";

/**
 * An Employee class
 */
class Employee {
    /**
     * Constructor for Employee
     * @param {String} firstName a firstname
     * @param {String} lastName a lastname
     */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._salaryRecord = new Map();
    }

    /**
     * Adds the arguments to the salary record
     * @param {String} dateStr a string representing a date 
     * @param {Number} amount the amount paid
     * @returns {undefined}
     */
    addEntry(dateStr, amount) {
        this._salaryRecord.set(dateStr,amount);
    }

    /**
     * Retrieves a String that describes how much 
     * this Employee was paid on that date
     * @param {String} date a date string
     * @returns {String} text describing how much was paid
     */
    printPaymentAmount(date) {
        if (this._salaryRecord.has(date)) {
            return `${this.name} was paid $${this._salaryRecord.get(date)} on ${date}`;
        } else {
            return `${this.name} did not receive a paycheck on ${date}`;
        }
    }

    /**
     * Returns a String desribing the average amount paid
     * @returns {String} describes average amount for this Employee
     */
    printAveragePaycheck() {
        // edge case, avoid dividing by zero by returning zero first
        if (this._salaryRecord.length == 0) { 
            return `Average paycheck for ${this.name} was $0`;
        }

        // calculate average pay
        let sum = 0;
        for (let amount of this._salaryRecord.values()) {
            sum += amount;
        }
        return `Average paycheck for ${this.name} was $${sum / this._salaryRecord.length}`;
    }
}

