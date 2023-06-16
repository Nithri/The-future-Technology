const previousButton = document.getElementById('previous-btn');
const nextButton = document.getElementById('next-btn');
const chartCanvas = document.getElementById('chart');
const chartContext = chartCanvas.getContext('2d');
const surveyData = JSON.parse(localStorage.getItem('surveyData'));

const questions = [
  'Which of these areas are you most interested in?',
  'Which of these do you rate as the most valuable to people?',
  'Which one do you consider the most dangerous? In terms of mental/physical/resources',
  'Do you think further development of any of these things could end tragically for us? Will it generally go the right way in the end?',
  'Do you think we should devote more time and resources to other problems on earth and their solutions?'
];

let currentQuestionIndex = 0;

function updateChart() {
  const currentQuestion = questions[currentQuestionIndex];
  const options = surveyData[currentQuestion];

  const optionLabels = Object.keys(options);
  const optionData = Object.values(options);

  const chartConfig = {
    type: 'doughnut',
    data: {
      labels: optionLabels,
      datasets: [
        {
          data: optionData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(244, 67, 54, 0.8)',
            'rgba(0, 150, 136, 0.8)',
            'rgba(76, 175, 80, 0.8)',
            'rgba(121, 85, 72, 0.8)'
          ]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  };

  new Chart(chartContext, chartConfig);
}

function showPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    updateChart();
  }
}

function showNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    updateChart();
  }
}

previousButton.addEventListener('click', showPreviousQuestion);
nextButton.addEventListener('click', showNextQuestion);

updateChart();
