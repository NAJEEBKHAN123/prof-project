// document.getElementById("quizForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent default form submission behavior

//     // Define correct answers
//     const correctAnswers = {
//         "q1": "Paris",
//         "q2": "Jupiter",
//         "q3": "H2O",
//         "q4": "Blue",
//         "q5": "William Shakespeare"
//     };

//     // Initialize variables for total marks and selected answers
//     let totalMarks = 0;
//     const selectedAnswers = {};

//     // Loop through each question
//     const questions = document.querySelectorAll(".question");
//     questions.forEach(function(question, index) {
//         const questionNumber = index + 1;
//         const selectedOption = question.querySelector('input[name="q' + questionNumber + '"]:checked');
//         if (selectedOption) {
//             const selectedValue = selectedOption.value;
//             selectedAnswers['q' + questionNumber] = selectedValue;
//             if (selectedValue === correctAnswers['q' + questionNumber]) {
//                 totalMarks++; // Increment total marks for correct answers
//             }
//         }
//     });

//     // Store total marks and selected answers in Session Storage
//     sessionStorage.setItem("totalMarks", totalMarks);
//     sessionStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));

//     // Redirect to results page
//     window.location.href = "results.html";
// });



  // Predefined correct answers
  const correctAnswers = ['A', 'B', 'C', 'D', 'E'];

  function evaluateQuiz() {
      const selectedAnswers = [];
      let totalMarks = 0;

      // Collect selected answers
      for (let i = 1; i <= 5; i++) {
          const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);
          if (selectedOption) {
              selectedAnswers.push(selectedOption.value);
          }
      }

      // Compare selected answers with correct answers
      for (let i = 0; i < correctAnswers.length; i++) {
          if (selectedAnswers[i] === correctAnswers[i]) {
              totalMarks += 20; // Award 20 marks for each correct answer
          }
      }

      // Store total marks in session storage
      sessionStorage.setItem('totalMarks', totalMarks);
  }