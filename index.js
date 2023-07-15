const questions = [{
    question: "What is the name of Ross and Monica's pet dog?",
    a: "Phoebe",
    b: "Gunther",
    c: "Marcel",
    d: "Smelly",
    correct: "c",
},
{
    question: "What is Joey's catchphrase when he likes something?",
    a: "How you doin'?",
    b: "Oh my God!",
    c: "No way!",
    d: "That's cool!",
    correct: "a",
},
{
    question: "Which character famously worked as a paleontologist?",
    a: "Monica",
    b: "Rachel",
    c: "Phoebe",
    d: "Ross",

    correct: "d",
},
{
    question: "What is the name of the coffee shop where the friends often hang out?",
    a: "Central Perk",
    b: "Central Park",
    c: " Central Café",
    d: "Central Spot",
    correct: "a",
},
{
    question: "Who was Chandler's long-time on-again, off-again girlfriend?",
    a: "Janice",
    b: "Emily",
    c: "Carol",
    d: "Julie",
    correct: "a",
}
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = questions.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = questions[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function () {
        const data = questions[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    if(correct==total){
        document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100">Congratulations! Your score is ${correct} / ${total} </h3>
    </div>`


    }
    else{
        document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-125"> Your score is ${correct} / ${total},  Try for a full score </h3>
            <button id="submit" onclick="location.reload()">Play again </button>
        </div>`
    }
    

}

loadQuestion(index);