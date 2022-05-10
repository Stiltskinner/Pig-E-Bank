const signupFormHandler = async function(event) {
  event.preventDefault();

  const firstNameEl = document.querySelector('#firstNameInput');
  const lastNameEl = document.querySelector('#lastNameInput');
  const emailInputEl = document.querySelector('#emailInput');
  const verifyEmailInputEl = document.querySelector('#verifyEmailInput');
  const passwordInputEl = document.querySelector('#passwordInput');
  const verifyPasswordInputEl = document.querySelector('#verifyPasswordInput');

  const response = await fetch('/api/user/', {
    method: 'POST',
    body: JSON.stringify({
      firstName: firstNameEl.value,
      lastName: lastNameEl.value,
      emailInput: emailInputEl.value,
      verifyEmailInput: verifyEmailInputEl.value,
      passwordInput: passwordInputEl.value,
      verifyPasswordInput: verifyPasswordInputEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to sign up');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
