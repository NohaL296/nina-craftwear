document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let score = 0;

  // Check Question 1 Answer
  if (document.getElementById('q1a1').checked) {
    score++;
  }

  // Check Question 2 Answer
  if (document.getElementById('q2a1').checked) {
    score++;
  }

  // Check Question 3 Answer
  if (document.getElementById('q3a1').checked) {
    score++;
  }

  // Display Score
  alert(`You scored ${score}/3!`);
});
