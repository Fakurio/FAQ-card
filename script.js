const questions = document.querySelector(".questions");
const answers = [
  "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  "No more than 2GB. All files in your account must fit your allotted storage space.",
  "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  "Yes! Send us a message and we’ll process your request no questions asked.",
  "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
];

window.addEventListener("resize", showProperWomanImg);
window.addEventListener("load", showProperWomanImg);

questions.addEventListener("click", (e) => {
  if (e.target.tagName === "P" || e.target.tagName === "IMG") {
    const questionValue = e.target.dataset.value;
    const questionText = document.querySelector(
      `p[data-value="${questionValue}"]`
    );
    const arrowElement = document.querySelector(
      `img[data-value="${questionValue}"]`
    );

    if (questionText.classList.contains("question-active")) {
      hideAnswer(questionValue, questionText, arrowElement);
    } else {
      showAnswer(e, questionValue, questionText, arrowElement);
    }
  }
});

function showAnswer(e, questionValue, questionText, arrowElement) {
  const answerElement = document.createElement("p");
  const questionElement = document.querySelector(
    `div.question[data-value="${questionValue}"]`
  );
  answerElement.textContent = answers[e.target.dataset.value];
  questionText.classList.toggle("question-active");
  answerElement.classList.toggle("answer");
  answerElement.setAttribute("data-value", questionValue);
  arrowElement.classList.toggle("arrow-active");
  questionElement.insertBefore(answerElement, questionElement.lastElementChild);
}

function hideAnswer(questionValue, questionText, arrowElement) {
  questionText.classList.toggle("question-active");
  arrowElement.classList.toggle("arrow-active");
  document.querySelector(`.answer[data-value="${questionValue}"`).remove();
}

function showProperWomanImg() {
  const womanImg = document.querySelector(".woman-img");
  if (
    this.innerWidth <= 1000 &&
    womanImg.src != "./images/illustration-woman-online-desktop.svg"
  ) {
    womanImg.src = "./images/illustration-woman-online-mobile.svg";
  } else {
    womanImg.src = "./images/illustration-woman-online-desktop.svg";
  }
}
