let problemElement = document.querySelector(".problem")
let userAnswer = document.querySelector(".answer")

let state = {
    score: 0,
    wrongAnswers: 0,
    problem: "",
    answer: ""
}

function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1))
}

function generateMathProblem() {
    let problem = ""
    let mathOperations = "+-*"
    let randomOperation = mathOperations[generateNumber(mathOperations.length - 1)]
    problem = `${generateNumber(10)} ${randomOperation} ${generateNumber(10)}`
    return {
        problem: problem,
        solution: eval(problem)
    }
}

function updateProblem() {
    let expression = generateMathProblem()
    state.problem = expression.problem
    state.answer = expression.solution
    problemElement.innerHTML = state.problem
}

document.addEventListener("DOMContentLoaded", () => {
    updateProblem()
    userAnswer.focus()
})
userAnswer.addEventListener("keyup", e => {
    if (parseInt(e.target.value) == state.answer) {
        console.log("Correct")
    } else {
        console.log("Incorrect")
    }
})
