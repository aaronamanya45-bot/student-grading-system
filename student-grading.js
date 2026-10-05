/*
 * Student Grading System
 * ----------------------
 * A console-based Node.js application that lets a lecturer enter
 * student names and marks, then calculates each student's grade
 * and the class average.
 *
 * Run with:  node student-grading.js
 *
 * Author: [Your Name]
 * Access Number: B36757
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// In-memory list of students: { name, mark, grade, remark }
const students = [];

/* ---------------------------------------------------------------
 * Converts a numeric mark (0-100) into a letter grade.
 * Uses if/else if/else to decide the grade.
 * --------------------------------------------------------------- */
function calculateGrade(mark) {
    if (mark >= 80) {
        return "A";
    } else if (mark >= 70) {
        return "B";
    } else if (mark >= 60) {
        return "C";
    } else if (mark >= 50) {
        return "D";
    } else {
        return "F";
    }
}

/* ---------------------------------------------------------------
 * Returns a short comment based on the letter grade.
 * --------------------------------------------------------------- */
function getRemark(grade) {
    if (grade === "A") return "Excellent";
    if (grade === "B") return "Very Good";
    if (grade === "C") return "Good";
    if (grade === "D") return "Pass";
    return "Fail";
}

/* ---------------------------------------------------------------
 * Calculates the average of an array of marks.
 * Uses a for loop to add up all the values.
 * --------------------------------------------------------------- */
function calculateAverage(marks) {
    if (marks.length === 0) return 0;

    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return total / marks.length;
}

/* ---------------------------------------------------------------
 * Prints the results table and class average to the console.
 * --------------------------------------------------------------- */
function displayResults() {
    console.log("\n--- Results ---");
    console.log("Name\t\tMark\tGrade\tRemark");

    for (let i = 0; i < students.length; i++) {
        const s = students[i];
        console.log(`${s.name}\t\t${s.mark}\t${s.grade}\t${s.remark}`);
    }

    const marks = students.map((s) => s.mark);
    const average = calculateAverage(marks);
    console.log(`\nClass average: ${average.toFixed(1)}`);
}

/* ---------------------------------------------------------------
 * Recursively asks the user for the next student's name and mark.
 * Stops when the user types "done".
 * --------------------------------------------------------------- */
function askForStudent() {
    rl.question('Student name (or type "done" to finish): ', (name) => {
        if (name.trim().toLowerCase() === "done") {
            if (students.length === 0) {
                console.log("No students were entered.");
            } else {
                displayResults();
            }
            rl.close();
            return;
        }

        rl.question(`Mark for ${name} (0-100): `, (markInput) => {
            const mark = Number(markInput);

            if (isNaN(mark) || mark < 0 || mark > 100) {
                console.log("Invalid mark. Please enter a number between 0 and 100.\n");
                askForStudent();
                return;
            }

            const grade = calculateGrade(mark);
            const remark = getRemark(grade);

            students.push({ name, mark, grade, remark });
            console.log(`${name} has been added.\n`);

            askForStudent();
        });
    });
}

// --- Entry point ---
console.log("Student Grading System");
console.log("======================\n");
askForStudent();
