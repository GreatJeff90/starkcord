// Ensure userData is properly populated with the form values
const userData = {
  firstName: document.querySelector('input[placeholder="First Name"]').value,
  lastName: document.querySelector('input[placeholder="Last Name"]').value,
  email: document.querySelector('input[placeholder="Email"]').value,
  role: document.querySelector('select').value,
  companyName: document.querySelector('input[placeholder="Company Name"]').value,
  password: document.querySelector('input[placeholder="Password"]').value
};

fetch('http://localhost:3000/saveUserData', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userData)  // Send user data as JSON
})
.then(response => response.json())
.then(data => {
  console.log('User data saved:', data);
  alert('Sign Up Successful!');
})
.catch(error => {
  console.error('Error saving user data:', error);
  alert('There was an error saving your data.');
});
