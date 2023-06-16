document.addEventListener("DOMContentLoaded", function() {
  // Get the stored selections from local storage
  const q1Selection = localStorage.getItem('q1Selection');
  const q2Selection = localStorage.getItem('q2Selection');
  const q3Selection = localStorage.getItem('q3Selection');
  const q4Selection = localStorage.getItem('q4Selection');
  const q5Selection = localStorage.getItem('q5Selection');

  // Create chart data
  const chartData = [
    {
      question: "Which of these areas are you most interested in?",
      answers: [
        { answer: "Apps and their contribution to our lives", count: q1Selection },
        { answer: "IoT - the future of our everyday life", count: q1Selection },
        { answer: "Health, medicine and human life extension", count: q1Selection },
        { answer: "Artificial intelligence", count: q1Selection },
        { answer: "Development of neurotechnology, or the combination of man and machine", count: q1Selection },
        { answer: "Space exploration and the first colony on Mars", count: q1Selection }
      ]
    },
    {
      question: "Which of these do you rate as the most valuable to people?",
      answers: [
        { answer: "Apps and their contribution to our lives", count: 0 },
        { answer: "IoT - the future of our everyday life", count: 0 },
        { answer: "Health, medicine and human life extension", count: 0 },
        { answer: "Artificial intelligence", count: 0 },
        { answer: "Development of neurotechnology, or the combination of human and machine", count: 0 },
        { answer: "Space exploration and the first colony on Mars", count: 0 }
      ]
    },
    {
      question: "Which one do you consider the most dangerous? In terms of mental/physical/resources",
      answers: [
        { answer: "Apps and their contribution to our lives", count: 0 },
        { answer: "IoT - the future of our everyday life", count: 0 },
        { answer: "Health, medicine and human life extension", count: 0 },
        { answer: "Artificial intelligence", count: 0 },
        { answer: "Development of neurotechnology, or the combination of man and machine", count: 0 },
        { answer: "Space exploration and the first colony on Mars", count: 0 }
      ]
    },
    {
      question: "Do you think further development of any of these things could end tragically for us? Will it generally go the right way in the end?",
      answers: [
        { answer: "I think it will only get better and better", count: 0 },
        { answer: "I think our future is uncertain, but we have a chance for a good scenario", count: 0 },
        { answer: "I think there is a good chance that we will end up destroying ourselves", count: 0 }
      ]
    },
    {
      question: "Do you think we should devote more time and resources to exploring space, or that there are bigger problems here on Earth?",
      answers: [
        { answer: "I think that our future depends on space exploration and colonization of other planets", count: 0 },
        { answer: "I think space exploration is interesting, but we have much bigger problems on Earth", count: 0 },
        { answer: "Not at all. I think what we do is good, and even if there are bigger problems on Earth, it's not about the fact that we will destroy something with this development", count: 0 }
      ]
    }
  ];

  // Update the counts based on stored selections
  chartData.forEach((question) => {
    const questionNumber = chartData.indexOf(question) + 1;
    const storedSelection = localStorage.getItem(`q${questionNumber}Selection`);

    question.answers.forEach((answer) => {
      if (storedSelection === answer.answer) {
        answer.count++;
      }
    });
  });

  let currentChartIndex = 0;
  const chartContainer = document.getElementById("chart-container");
  const questionContainer = document.getElementById("question");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Function to show current chart and question
  const showCurrentChart = () => {
    chartContainer.innerHTML = '';
    questionContainer.textContent = '';

    const question = chartData[currentChartIndex];

    const chartCanvas = document.createElement("canvas");
    chartCanvas.id = `chart${currentChartIndex}`;
    chartCanvas.classList.add("chart-canvas");
    chartContainer.appendChild(chartCanvas);

    const chartCtx = chartCanvas.getContext("2d");
    new Chart(chartCtx, {
      type: "doughnut",
    data: {
        labels: question.answers.map((answer) => answer.answer),
        datasets: [
          {
            data: question.answers.map((answer) => answer.count),
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40"
            ]
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });

    questionContainer.textContent = question.question;

    prevBtn.disabled = currentChartIndex === 0;
    nextBtn.disabled = currentChartIndex === chartData.length - 1;
  };

  // Show initial chart and question
  showCurrentChart();

  // Previous button click handler
  prevBtn.addEventListener("click", () => {
    if (currentChartIndex > 0) {
      currentChartIndex--;
      showCurrentChart();
    }
  });

  // Next button click handler
  nextBtn.addEventListener("click", () => {
    if (currentChartIndex < chartData.length - 1) {
      currentChartIndex++;
      showCurrentChart();
    }
  });
});
