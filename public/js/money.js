const updateSavings = async () => {

    const savingAmountEl = document.querySelector('#savingsLink');
    const currentSavings = parseInt(savingAmountEl.textContent);
    const savingAdjustEl = document.querySelector('#');
    const savingsAdjust = parseInt(savingAdjustEl.textContent);
    // Needs savings adjust value pulled from form
    let newSavings = currentSavings+savingsAdjust;
    const response = await fetch('/api/money/', {
        method: 'PUT',
        body: JSON.stringify({
            savings: newSavings
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update money');
      }
    };

const updateChecking = async () => {

    const checkingAmountEl = document.querySelector('#checkingsLink');
    const currentChecking = parseInt(checkingAmountEl.textContent);
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

savingsForm.addEventListener('click', updateSavings);
checkingForm.addEventListener('click', updateChecking);