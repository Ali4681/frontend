let form = document.querySelector("form");
const rounds = [
  {
    question: "hey",
    answers: [
      { text: " hello", correct: false },
      { text: " how r u", correct: false },
      { text: " ok", correct: true },
      { text: " fine", correct: false },
    ],
  },

  {
    question: "q2",
    answers: [
      { text: " answer 1 ", correct: false },
      { text: " answer 2", correct: true },
      { text: " answer 3", correct: false },
      { text: " answer 4", correct: false },
    ],
  },

  {
    question: "q3",
    answers: [
      { text: " answer 1", correct: false },
      { text: " answer 2", correct: false },
      { text: " answer 3", correct: false },
      { text: " answer 4", correct: true },
    ],
  },

  {
    question: "q4",
    answers: [
      { text: " answer 1", correct: true },
      { text: " answer 2", correct: false },
      { text: " answer 3", correct: false },
      { text: " answer 4 ", correct: false },
    ],
  },
];

let h2 = document.querySelector(".parent>h2");
let roundIndex = 0; // الفهرسة لاي جولة
let Sccoer = 0; // عداد الاجوبة الصحيحة
let Mistake = 0; // عداد الاجوبة االخطأ
let q22, q11; // paragraph
// يقوم بجلب السؤال والجواب
function init() {
  // rest counter
  if (roundIndex == 0) {
    Sccoer = 0;
    Mistake = 0;
    form.parentElement.append(h2);
  }
  // create paragraph
  q22 = document.createElement("p");
  q22.className = "q22";
  q22.innerHTML = "Mistake = " + Mistake;
  form.parentElement.append(q22);
  q11 = document.createElement("p");
  q11.className = "q11";
  q11.innerHTML = "Sccoer = " + Sccoer;
  form.parentElement.append(q11);
  //create div for question
  let questionText = rounds[roundIndex].question;
  let questionDiv = document.createElement("div");
  questionDiv.innerHTML = roundIndex + 1 + "-" + questionText;
  questionDiv.classList.add("question");
  form.append(questionDiv);
  //create div for answer
  rounds[roundIndex].answers.forEach((answer) => {
    let answersDiv = document.createElement("div");
    answersDiv.innerHTML = answer.text;
    // if answer is correct storage in dataset
    if (answer.correct == true) {
      answersDiv.dataset.correctAnswer = true;
    }

    form.append(answersDiv);
  });
}

//and giv him the true/false form dataset
let checkAnswer = (e) => {
  let pressedDv = e.target;

  //when click btn give me color green is true
  if (pressedDv.dataset.correctAnswer) {
    pressedDv.classList.add("correct");
    Sccoer++;
  } else {
    //when click btn give me color red is false
    pressedDv.classList.add("false");
    Mistake++;

    //use array because form.children isn't array and use forEach because it's without index
    Array.from(form.children).forEach((ansDiv) => {
      // all elemnte in HTML have temporary storage and when i refresh the page ,refresh dataset
      if (ansDiv.dataset.correctAnswer) {
        ansDiv.classList.add("correct");
      }
    });
  }
  // create btnNext for take me to next question
  let btnNext = document.createElement("input");
  btnNext.value = "Next";
  btnNext.type = "submit";
  btnNext.className = "Next";
  form.parentElement.append(btnNext);

  btnNext.addEventListener("click", () => {
    roundIndex++;
    //check all rounds and give me next question and remove previous question,
    // when i arrive to last question restart the quiz and go to first question
    if (roundIndex == rounds.length) {
      Array.from(form.children).forEach((child) => {
        child.remove();
      });
      h2.remove();
      q33 = document.createElement("p");
      q33.className = "q33";
      q33.innerHTML = "you are finish the quiz";
      form.parentElement.append(q33);
      //create btnRest for when i arrive to last question restart the quiz and go to first question
      let btnRes = document.createElement("input");
      btnRes.value = "Restart";
      btnRes.type = "submit";
      btnRes.className = "Next";
      form.parentElement.append(btnRes);

      //when rond=0 restart sccore and mistake
      btnRes.addEventListener("click", () => {
        roundIndex = 0;
        q11.remove();
        q22.remove();
        q33.remove();
        btnRes.remove();
        init();
      });
      //remove btnNext if i don't click to any answer
      btnNext.remove();
    } else {
      //check all child in form ,remove and add new question,answer
      Array.from(form.children).forEach((child) => {
        child.remove();
      });
    }

    q11.remove();
    q22.remove();
    // init give ques,answer when the roundIndex there are
    init();
    btnNext.remove();
  });
};

//we call up the init when play the website direct
init();
//we have two function     1-  () => {}     2- like that because have ready function
form.addEventListener("click", checkAnswer);
