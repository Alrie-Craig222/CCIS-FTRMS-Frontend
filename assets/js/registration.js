// script.js

function submitForm() {
  // Get form data
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Create data object
  const data = {
      username: username,
      email: email,
      password: password
  };

  // Send data to backend
  fetch('http://ccis-ftrms-backend.test/api/user', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      // Handle success, e.g., redirect to a new page
  })
  .catch((error) => {
      console.error('Error:', error);
      // Handle error, show an alert, etc.
  });
}

document.getElementById('registerButton').addEventListener('click', submitForm);
