// Student Registration Form Validation

const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();

  // Validation Functions

  const isValidUsername = (username) => username !== '';
  const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  const isValidPhone = (phone) => /^\d{10}$/.test(phone);
  const isValidPassword = (password) => /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@])[A-Za-z\d&$#@]{7,}$/.test(password);
  const isValidConfirmPassword = (password, confirmPassword) => password === confirmPassword;

  // Perform Validations

  if (!isValidUsername(username) || !isValidEmail(email) || !isValidPhone(phone) || !isValidPassword(password) || !isValidConfirmPassword(password, confirmPassword)) {
    if (!isValidUsername(username)) {
      alert('Please enter a valid username');
    } else if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
    } else if (!isValidPhone(phone)) {
      alert('Please enter a valid phone number');
    } else if (!isValidPassword(password)) {
      alert('Please enter a valid password');
    } else if (!isValidConfirmPassword(password, confirmPassword)) {
      alert('Passwords do not match');
    }
    return;
  }

  // If all validations pass, submit the form
  form.submit();
});