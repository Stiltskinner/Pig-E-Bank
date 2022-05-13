const updateSavings = async (event) => {
    event.preventDefault();
    const userIdContainerEl = document.querySelector('#user-id-holder');
    const userId = userIdContainerEl.value;
    const savingAmountEl = document.querySelector('#user-savings');
    const currentSavings = parseFloat(savingAmountEl.textContent);
    const savingAdjustEl = document.querySelector('#savings-feed-amt');
    const savingsAdjust = parseFloat(savingAdjustEl.value);
    console.log('user id',userId);
    // Needs savings adjust value pulled from form
    let newSavings = currentSavings+savingsAdjust;
    const response = await fetch(`/api/money/${userId}`, {
        method: 'PUT',
        body: JSON.stringify({
            savings: newSavings,
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
    const userIdContainerEl = document.querySelector('#user-id-holder');
    const userId = userIdContainerEl.value;
    const checkingAmountEl = document.querySelector('#user-checking');
    const currentChecking = parseFloat(checkingAmountEl.textContent);
    const checkingAdjustEl = document.querySelector('#checking-feed-amt');
    const checkingAdjust = parseFloat(checkingAdjustEl.value);
    // Needs checking adjust value pulled from form
    let newChecking = currentChecking+checkingAdjust;
    const response = await fetch(`/api/money/${userId}`, {
        method: 'PUT',
        body: JSON.stringify({
            checking: newChecking,
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