import apiUrl from './apiConfig'; // Import your API base URL or ngrok URL

// Function to handle user login
export function loginUser(email, password) {
    return fetch(`${apiUrl}/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Login failed.');
        }
    })
    .catch(error => {
        console.error('Login error:', error);
        throw error; // Propagate the error for further handling
    });
}

// Function to handle user signup
export function signupUser(firstName, lastName, email, password) {
    return fetch(`${apiUrl}/api/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({ first_name: firstName, last_name: lastName, email, password })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Signup failed.');
        }
    })
    .catch(error => {
        console.error('Signup error:', error);
        throw error; // Propagate the error for further handling
    });
}

// Event listener for login form submission
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const data = await loginUser(email, password);
        // Handle successful login (e.g., redirect to dashboard)
        console.log('Login successful:', data);
        window.location.href = 'UserTD_Dashboard.html';
    } catch (error) {
        console.error('Login error:', error);
        // Handle login error (e.g., display error message)
    }
});

// Event listener for signup form submission
document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('signupFirstName').value;
    const lastName = document.getElementById('signupLastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    try {
        const data = await signupUser(firstName, lastName, email, password);
        // Handle successful signup (e.g., show success message)
        console.log('Signup successful:', data);
        // Optionally redirect to a login page after signup
        window.location.href = 'UserTD_login-signup.html';
    } catch (error) {
        console.error('Signup error:', error);
        // Handle signup error (e.g., display error message)
    }
});
