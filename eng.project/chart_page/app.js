const answerOptions = {
  q1: ['Apps and their contribution to our lives', 'IoT - the future of our everyday life', 'Health, medicine and human life extension', 'Artificial intelligence', 'Development of neurotechnology, or the combination of man and machine', 'Space exploration and the first colony on Mars'],
  q2: ['Apps and their contribution to our lives', 'IoT - the future of our everyday life', 'Health, medicine and human life extension', 'Artificial intelligence', 'Development of neurotechnology, or the combination of human and machine', 'Space exploration and the first colony on Mars'],
  q3: ['Apps and their contribution to our lives', 'IoT - the future of our everyday life', 'Health, medicine and human life extension', 'Artificial intelligence', 'Development of neurotechnology, or the combination of man and machine', 'Space exploration and the first colony on Mars'],
  q4: ['I think it will only get better and better', 'I think our future is uncertain, but we have a chance for a good scenario', 'I think there is a good chance that we will end up destroying ourselves'],
  q5: ['Strongly. We have a big mess on earth. With this approach we will probably destroy the next environment', "It's not good, but it's not tragic either. Somehow it will probably be", 'Not necessarily, there will always be some problems', "There's no point because we won't fix the current damage and those in the future anyway"],
};

const questionData = [
  {
    question: 'Question 1',
    selectionKey: 'q1Selection',
  },
  {
    question: 'Question 2',
    selectionKey: 'q2Selection',
  },
  {
    question: 'Question 3',
    selectionKey: 'q3Selection',
  },
  {
    question: 'Question 4',
    selectionKey: 'q4Selection',
  },
  {
    question: 'Question 5',
    selectionKey: 'q5Selection',
  },
];

let currentQuestionIndex = 0;
let frequencies = null;

function calculateFrequencies() {
  const selectionKey = questionData[currentQuestionIndex].selectionKey;
  const selectedOptions = JSON.parse(localStorage.getItem(selectionKey)) || [];

  frequencies = {};
  selectedOptions.forEach(option => {
    frequencies[option] = (frequencies[option] || 0) + 1;
  });
}

function displayChart() {
  const chartContainer = document.getElementById('chart');
  chartContainer.innerHTML = ''; // Clear previous chart if any

  const chartCanvas = document.createElement('canvas');
  chartCanvas.className = 'chart';
  chartContainer.appendChild(chartCanvas);

  const ctx = chartCanvas.getContext('2d');
  const labels = Object.keys(frequencies);
  const data = Object.values(frequencies);

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8D6E63', '#4CAF50', '#FF5722'],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

function updateQuestion() {
  calculateFrequencies();
  displayChart();
}

function previousQuestion() {
  currentQuestionIndex--;
  if (currentQuestionIndex < 0) {
    currentQuestionIndex = questionData.length - 1;
  }
  updateQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questionData.length) {
    currentQuestionIndex = 0;
  }
  updateQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
  const previousBtn = document.getElementById('previousBtn');
  const nextBtn = document.getElementById('nextBtn');

  previousBtn.addEventListener('click', previousQuestion);
  nextBtn.addEventListener('click', nextQuestion);

  updateQuestion();
});
