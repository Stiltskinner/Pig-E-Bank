const signupFormHandler = async function(event) {
  event.preventDefault();

  const firstNameEl = document.querySelector('#firstNameInput');
  const lastNameEl = document.querySelector('#lastNameInput');
  const emailInputEl = document.querySelector('#emailInput');
  const verifyEmailInputEl = document.querySelector('#verifyEmailInput');
  const passwordInputEl = document.querySelector('#passwordInput');
  const verifyPasswordInputEl = document.querySelector('#verifyPasswordInput');

if (emailInputEl.value !== verifyEmailInputEl.value) {
  alert('Please ensure that your email matches your verify email');
  return;
}

if (passwordInputEl.value !== verifyPasswordInputEl.value) {
  alert('Please ensure that your password matches your verify password');
  return;
}

  const response = await fetch('/api/user/', {
    method: 'POST',
    body: JSON.stringify({
      first_name: firstNameEl.value,
      last_name: lastNameEl.value,
      email: emailInputEl.value,
      password: passwordInputEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
console.log("response", response)
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to sign up');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
