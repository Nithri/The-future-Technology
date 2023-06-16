const options = document.querySelectorAll('.survey .option');

options.forEach((option) => {
  option.addEventListener('click', () => {
    const questionIndex = parseInt(option.parentNode.parentNode.classList[0].slice(1)) - 1;
    const selectedOptionIndex = Array.from(option.parentNode.children).indexOf(option);

    handleAnswer(questionIndex, selectedOptionIndex);
  });
});

function handleAnswer(questionIndex, selectedOptionIndex) {
  const optionsContainer = document.querySelectorAll('.survey')[questionIndex];
  const options = optionsContainer.querySelectorAll('.option');

  options.forEach((option, index) => {
    option.classList.remove('selected');
    if (index === selectedOptionIndex) {
      option.classList.add('selected');
    }
  });
}
