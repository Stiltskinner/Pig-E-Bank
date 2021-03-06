const createPigHandler = async function(event) {
    event.preventDefault();
  
    const nameEl = document.querySelector('#pigName');
    const checkingRadioEl = document.querySelector('#flexRadioDefault1');
    const savingsRadioEl = document.querySelector('#flexRadioDefault2');
    const pigAmountDueEl = document.querySelector('#pigAmountDue');
    const isPigDDNoEl = document.querySelector('#isPigDDNo');
    const isPigDDYesEl = document.querySelector('#isPigDDYes');
    const directDepositDateEl = document.querySelector('#directDepositDate');
    const pigDueDateEl = document.querySelector('#pigDueDate');
    const userIdContainerEl = document.querySelector('#user-id-container');


  if (!nameEl.value) {
    alert('Please enter a name for your pig');
    return;
  }

  let isSavings;
  if (checkingRadioEl.checked) {
      isSavings = false;
  } else {
      isSavings = true;
  }

  let amountDue;
  if (!pigAmountDueEl.value) {
      amountDue = null;
  } else {
      amountDue = pigAmountDueEl.value;
  }

let isDD;
  if(!directDepositDateEl.value) {
    isDD=null
  }
  else {
      isDD=directDepositDateEl.value;
  }


let dueDate;
if(!pigDueDateEl.value) {
    dueDate = null;
} else {
    dueDate=pigDueDateEl.value;
}

    const response = await fetch('/api/pigs/', {
      method: 'POST',
      body: JSON.stringify({
        name: nameEl.value,
        is_savings: isSavings,
        amount_due: amountDue,
        amount_held: 0,
        direct_deposit: isDD,
        due_date: dueDate,
        user_id: userIdContainerEl.value
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create pig');
    }
  };

  document
    .querySelector('#create-pig-form')
    .addEventListener('submit', createPigHandler);