# STUDENT GRADING SYSTEM📚

A console-based **Node.js** application that lets a lecturer enter student
names and marks, then automatically calculates each student's grade,
remark, and the class average.

Built to demonstrate core JavaScript concepts: **functions, conditions,
loops, and user interaction** using Node.js's `readline` module.

---

## ✨ Features

- ➕ Add unlimited students interactively from the terminal
- 🎯 Automatic grade calculation (A, B, C, D, F)
- 💬 Custom remarks for each grade (Excellent, Good, Pass, Fail…)
- 📊 Class average calculated at the end
- ✅ Input validation (rejects non-numeric or out-of-range marks)
- 🖥️ Clean, formatted results table

---

## 🚀 How to Run

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/student-grading-system.git
   cd student-grading-system
   ```

2. **Run the program**

   ```bash
   node student-grading.js
   ```

3. **Follow the on-screen prompts.**

---

## 🕹️ How to Use

1. When prompted, type a **student's name** and press Enter.
2. Enter their **mark** between 0 and 100 and press Enter.
3. Repeat for as many students as you like.
4. When you're finished, type **`done`** instead of a name.
5. The program prints a **results table** and the **class average**.

### Example Session

```
Student Grading System
======================

Student name (or type "done" to finish): Amanya Aaron
Mark for Amanya Aaron (0-100): 50
Amanya Aaron has been added.

Student name (or type "done" to finish): Ampumuza Esther
Mark for Ampumuza Esther (0-100): 40
Ampumuza Esther has been added.

Student name (or type "done" to finish): Nabukenya Sarah
Mark for Nabukenya Sarah (0-100): 10
Nabukenya Sarah has been added.

Student name (or type "done" to finish): done

--- Results ---
Name                Mark    Grade   Remark
Amanya Aaron        50      D       Pass
Ampumuza Esther     40      F       Fail
Nabukenya Sarah     10      F       Fail

Class average: 33.3
```

---

## 📏 Grading Scale

| Mark Range | Grade | Remark     |
|------------|-------|------------|
| 80 – 100   | A     | Excellent  |
| 70 – 79    | B     | Very Good  |
| 60 – 69    | C     | Good       |
| 50 – 59    | D     | Pass       |
| Below 50   | F     | Fail       |

---

## 🧠 Concepts Demonstrated

| Concept             | Where It's Used                                        |
|---------------------|--------------------------------------------------------|
| **Functions**       | `calculateGrade`, `getRemark`, `calculateAverage`, `displayResults`, `askForStudent` |
| **Conditionals**    | `if / else if / else` in grade and remark logic        |
| **Loops**           | `for` loops in `calculateAverage` and `displayResults` |
| **Recursion**       | `askForStudent` calls itself for each new student      |
| **User Input**      | Node.js `readline` module                              |
| **Input Validation**| Checks mark is a valid number between 0 and 100        |

---

## 📁 Project Structure

```
student-grading-system/
├── student-grading.js   # Main program
├── README.md            # You're reading it
└── LICENSE              # MIT license (optional)
```

---

## 🔮 Possible Future Improvements

- [ ] Save results to a file (JSON or CSV)
- [ ] Load existing student data on startup
- [ ] Support multiple subjects per student
- [ ] Compute highest, lowest, and median marks
- [ ] Color-coded output using `chalk`
- [ ] Convert to a web app using Express

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**[Your Full Name]**
- Access Number: B36757
- GitHub: [@your-username](https://github.com/your-username)

---

⭐ If you found this useful, feel free to star the repo!
