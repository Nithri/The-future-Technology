const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const option5 = document.querySelector(".option5");

const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const q5 = document.querySelector(".q5");

const survey = document.querySelector(".survey");
const end = document.querySelector(".end");

option1.addEventListener("click", function() {
  q1.style.display = "none";
  q2.style.display = "block";
});

option2.addEventListener("click", function() {
  q2.style.display = "none";
  q3.style.display = "block";
});

option3.addEventListener("click", function() {
  q3.style.display = "none";
  q4.style.display = "block";
});

option4.addEventListener("click", function() {
  q4.style.display = "none";
  q5.style.display = "block";
});

option5.addEventListener("click", function() {
  q5.style.display = "none";
  survey.style.display = "none";
  end.style.display = "block";
});

/* Local Storage */

// Get references to the list items
const q1Options = document.querySelectorAll('.option1 li');
const q2Options = document.querySelectorAll('.option2 li');
const q3Options = document.querySelectorAll('.option3 li');
const q4Options = document.querySelectorAll('.option4 li');
const q5Options = document.querySelectorAll('.option5 li');

// Add event listeners to the list items
q1Options.forEach(option => {
  option.addEventListener('click', function() {
    // Store the selected option in local storage
    localStorage.setItem('q1Selection', option.textContent.trim());
  });
});

q2Options.forEach(option => {
  option.addEventListener('click', function() {
    // Store the selected option in local storage
    localStorage.setItem('q2Selection', option.textContent.trim());
  });
});

q3Options.forEach(option => {
  option.addEventListener('click', function() {
    // Store the selected option in local storage
    localStorage.setItem('q3Selection', option.textContent.trim());
  });
});

q4Options.forEach(option => {
  option.addEventListener('click', function() {
    // Store the selected option in local storage
    localStorage.setItem('q4Selection', option.textContent.trim());
  });
});

q5Options.forEach(option => {
  option.addEventListener('click', function() {
    // Store the selected option in local storage
    localStorage.setItem('q5Selection', option.textContent.trim());
  });
});
