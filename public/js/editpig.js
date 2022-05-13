// const pigsDiv = document.querySelector('#pigs')
// const pigIdSelect = document.querySelectorAll('input[class=edit-value]')
// const pigIds = []
// for (let pig of pigIdSelect){
//     let num = pig.value
//     pigIds.push(num)
// }
// console.log(pigIds)

// const showModal = (event) =>{
//     const target = event.target.id
//     console.log(target)
//     modal(target)
// }

const modal = (id) => {
$(`${id}`).on('click', function() {
    $(`#pig${id}`).modal('show');
})
}


// pigsDiv.addEventListener('click', showModal)