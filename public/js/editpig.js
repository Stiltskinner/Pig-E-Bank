// const pigsDiv = document.querySelector('#pigs')
// const pigIdSelect = document.querySelectorAll('input[class=edit-value]')
// const pigIds = []
// for (let pig of pigIdSelect){
//     let num = pig.value
//     pigIds.push(num)
// }
// console.log(pigIds)


$('#edit').on('click', async function() {
    $(`#pig${pigId}`).modal('show');
})

const savePigBtn = document.querySelector("#save-btn")
const pigNameEl = document.querySelector('#pigname');
const dueDateEl = document.querySelector('#date');
const amountDueEl = document.querySelector('#amountdue');
const directDepositDateEl = document.querySelector('#directdepositdate');

const updatePig = async () => {
    const response = await fetch('/api/pigs/', {
        method: 'PUT',
        body: JSON.stringify({
            id: pigId,
            name: pigNameEl.value,
            amount_due: amountDueEl.value,
            direct_deposit: directDepositDateEl.value,
            due_date: dueDateEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update pig');
      }
    };


savePigBtn.addEventListener('click', updatePig)
