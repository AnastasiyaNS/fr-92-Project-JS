//modal window

const modalWindow = document.getElementById("section2_myModal");
// the button that opens the modal
const openModalBtn = document.getElementById("part2_calc_volumecalc");
// the <span> element that closes the modal
const spanCloseModal = document.querySelector(".section2_close");

// When the user clicks the button, open the modal 
openModalBtn.addEventListener('click', displayModal);
function displayModal() {
    modalWindow.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanCloseModal.addEventListener('click', closeModal)
function closeModal() {
    modalWindow.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', closeModalGeneral)
function closeModalGeneral(event) {
  if (event.target == modalWindow) {
    modalWindow.style.display = "none";
  }
}





// currency calculator
const buttonCurrencyCalc = document.getElementById("calc");

function getCurrency(e){
    e.preventDefault();
    const formCurrency = document.forms.currency_exch_calc;
    //const currency_from_input = document.getElementById("currency_from_input").value;
    const currency_from_input = formCurrency.elements.currency_from_input.value;
    //const currency_to_input = document.getElementById("currency_to_input").value;
    const currency_to_input = formCurrency.elements.currency_to_input.value;
    //const currency_input = document.getElementById("currency_input_amount").value;
    const currency_input_amount = formCurrency.elements.currency_input_amount.value;
    const currency_input_num = +currency_input_amount;
    console.log(currency_input_num)
    const sum = document.getElementById("currency_exch_calc_final_sum");

    fetch(`https://hexarate.paikama.co/api/rates/latest/${currency_from_input}?target=${currency_to_input}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        console.log(data.data)
        const rateNumber = JSON.parse(data.data.mid);
        console.log(rateNumber)
        const result = currency_input_num * rateNumber;
        console.log(result)
        sum.textContent = result.toFixed(2);

    })
    .catch((error) => {
        console.log("error", error)
        sum.innerHTML = "Пожалуйста, проверьте правильность введенных данных";
    }
        )
}


buttonCurrencyCalc.addEventListener('click', getCurrency);