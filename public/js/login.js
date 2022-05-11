const loginFormHandler = async function(event) {
  event.preventDefault();

  const emailEl = document.querySelector('#emailInput');
  const passwordEl = document.querySelector('#passwordInput');

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to login');
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
