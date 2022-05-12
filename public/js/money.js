const updateSavings = async (event) => {
    event.preventDefault();
    const userIdContainerEl = document.querySelector('#user-id-container');
    const savingAmountEl = document.querySelector('#user-savings');
    const currentSavings = parseInt(savingAmountEl.textContent);
    const savingAdjustEl = document.querySelector('#savings-feed-amt');
    const savingsAdjust = parseInt(savingAdjustEl.value);
    // Needs savings adjust value pulled from form
    let newSavings = currentSavings+savingsAdjust;
    const response = await fetch('/api/money/', {
        method: 'PUT',
        body: JSON.stringify({
            savings: newSavings,
            user_id: userIdContainerEl.value
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update money');
      }
    };

const updateChecking = async (event) => {
    event.preventDefault();
    const checkingAmountEl = document.querySelector('#user-checking');
    const currentChecking = parseInt(checkingAmountEl.textContent);
    const checkingAdjustEl = document.querySelector('#savings-feed-amt');
    const checkingAdjust = parseInt(checkingAdjustEl.value);
    // Needs checking adjust value pulled from form
    let newChecking = currentChecking+checkingAdjust;
    const response = await fetch('/api/money/', {
        method: 'PUT',
        body: JSON.stringify({
            checking: newChecking
        }),
        headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
        document.location.replace('/dashboard');
        } else {
        alert('Failed to update money');
        }
    };

const savingsForm = document.querySelector("#savings-form");
const checkingForm = document.querySelector("#checking-form");

savingsForm.addEventListener('submit', updateSavings);
checkingForm.addEventListener('submit', updateChecking);