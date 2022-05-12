const editPigHandler = async function(event) {
    event.preventDefault();
  
    const nameEl = document.querySelector('#pigName');
    const checkingRadioEl = document.querySelector('#isPigChecking');
    const pigAmountDueEl = document.querySelector('#pigAmountDue');
    const isPigDDNoEl = document.querySelector('#isPigDDNo');
    const isPigDDYesEl = document.querySelector('#isPigDDYes');
    const directDepositDateEl = document.querySelector('#directDepositDate');
    const pigDueDateEl = document.querySelector('#pigDueDate');
    const userIdContainerEl = document.querySelector('#user-id-container');

    console.log("checkingRadioEl",checkingRadioEl.value,"pigAmountDueEl",pigAmountDueEl.value,"isPigDDNoEl", isPigDDNoEl.value, "directDepositDateEl", directDepositDateEl.value, "pigDueDateEl", pigDueDateEl.value )
  if (!nameEl.value) {
    alert('Please enter a name for your pig');
    return;
  }
  let isSavings;
  if (checkingRadioEl.value) {
      isSavings = false;
  } else {
      isSavings = true;
  }
  console.log("isSavings", isSavings)

  let amountDue;
  if (!pigAmountDueEl.value) {
      amountDue = null;
  } else {
      amountDue = pigAmountDueEl.value;
  }
  console.log("amount due", amountDue)

let isDD;
  if(isPigDDNoEl.value) {
    isDD=null
  }
  else {
      isDD=directDepositDateEl.value;
  }
  console.log("isDD", isDD)

let dueDate;
if(!pigDueDateEl.value) {
    dueDate = null;
} else {
    dueDate=pigDueDateEl.value;
}
console.log("dueDate", dueDate)
    const response = await fetch('/api/pigs/', {
      method: 'PUT',
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
    .querySelector('#edit-pig-form')
    .addEventListener('submit', editPigHandler);
  