const quizDB = [
    {
        question: "Q1: Which attribute specifies a unique alphanumeric identifier to be associated with an element?",
        a: "class",
        b: "id",
        c: "article",
        d: "html",
        ans: "ans2"
    },

    {
        question: "Q2: Which attribute is used to provide an advisory text about an element or its contents?",
        a: "tooltip",
        b: "dir",
        c: "title",
        d: "head",
        ans: "ans3"
    },

    {
        question: "Q3:  Which of the following is the attribute that specifies the column name from the data source object that supplies the bound data?",
        a: "dataFormatAs",
        b: "datafld",
        c: "disabled",
        d: "datasrc",
        ans: "ans2"
    },

    {
        question: "Q4: Which of the following is the attribute that is used to set a global identifier for a microdata item?",
        a: "key",
        b: "id",
        c: "itemclass",
        d: "itemid",
        ans: "ans4"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;
const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;


    deselectAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3>You scored ${score}/${quizDB.length} ✌ </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});