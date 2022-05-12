const pigIdSelect = document.querySelector('input[id="edit"]')
const pigId = pigIdSelect.value
console.log(pigId)

$('#edit').on('click', async function() {
    $(`#pig${pigId}`).modal('show');
})
