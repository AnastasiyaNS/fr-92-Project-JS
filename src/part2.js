//contact form
const formPriceCalc = document.forms.priceCalc;
const categoryCargo = formPriceCalc.elements.category;
const weightCargo = formPriceCalc.elements.weight;
const priceCargo = formPriceCalc.elements.price;
const volumeCargo = formPriceCalc.elements.volume;
const contactCustName = formPriceCalc.elements.customerName;
const contactCustPhone = formPriceCalc.elements.customerPhone;
const contactCustEmail = formPriceCalc.elements.customerEmail;
const contactCustMsg = formPriceCalc.elements.userMsg;
const btnCalcCargo = document.getElementById("part2_calc_button");

const priceCalcConf = document.getElementById("section2_formcalc_submitted");

formPriceCalc.addEventListener("submit", (e) => {
    e.preventDefault();
    const element = e.target;
    validateName(contactCustName);
    validatePhone(contactCustPhone);
    validateEmail(contactCustEmail);
    validateMsg(contactCustMsg);
    
    btnCalcCargo.addEventListener('click', (input)=> {
        formSubmittedMsg(input);
})
})


function validateName(input){
    const regex = /^[a-zA-Zа-яА-ЯЁё\s]+$/;
    const correctValue = input.value.trim();
    if (correctValue === ''){
        showErrorMsg(input, 'Введите имя')
        return;
     }
    if (regex.test(correctValue) === false) {
        console.log("incorrect name!")
        showErrorMsg(input, "Имя должно состоять из букв и пробелов");
        return;
    } 
    closeErrorMsg(input);
}

function validateEmail(input){
    const correctValue = input.value.trim();
    const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (correctValue === '') {
        console.log(correctValue)
        showErrorMsg(input, "Введите электронную почту");
        return;
    }
    if (regex.test(correctValue) === false) {
        console.log("incorrect email!")
        showErrorMsg(input, "Неверный формат электронной почты");
        return;
    }
    closeErrorMsg(input);
}

function validatePhone(input){
    const correctValue = input.value.trim();
    const regex = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/;
    if (correctValue === ''){
        showErrorMsg(input, "Введите номер телефона")
        return;
    }
    if (regex.test(correctValue) === false){
        console.log("incorrect phone number!")
        showErrorMsg(input, "Введите корректный номер телефона");
        return;
    }
    closeErrorMsg(input);
}

function validateMsg(input){
    
    const correctValue = input.value.trim();
    if (correctValue === ''){
        showErrorMsg(input, "Введите сообщение")
        return;
    }
    closeErrorMsg(input);
    
}

function showErrorMsg(input, message){
    const parentElement = input.parentElement;
    const errorMsgPar = parentElement.querySelector(".part2_calc_errormsg");
    errorMsgPar.textContent = message;
    console.log(errorMsgPar)
    
    errorMsgPar.classList.remove("part2_calc_errormsg_none");
}

function closeErrorMsg(input){
    const parentElement = input.parentElement;
    const errorMsgPar = parentElement.querySelector(".part2_calc_errormsg");
    errorMsgPar.textContent = '';
    errorMsgPar.classList.add("part2_calc_errormsg_none");
}

function validateAll(inputs){
    const inputErr = inputs.filter((input) => input.value.trim() === '');
    if(inputErr.length === 0) {
        btnCalcCargo.disabled = false;
        return;
    }
    //btnCalcCargo.disabled = true;
}
function formSubmittedMsg(){
    priceCalcConf.classList.remove("section2_formcalc_submitted_none");
    priceCalcConf.classList.add("section2_formcalc_submitted");
    formPriceCalc.classList.add("part2_formcalc_none");
}

contactCustName.addEventListener('input', () => validateAll([contactCustName, contactCustPhone, contactCustEmail, contactCustMsg]));
contactCustPhone.addEventListener('input', () => validateAll([contactCustName, contactCustPhone, contactCustEmail, contactCustMsg]));
contactCustEmail.addEventListener('input', () => validateAll([contactCustName, contactCustPhone, contactCustEmail, contactCustMsg]));
contactCustMsg.addEventListener('input', () => validateAll([contactCustName, contactCustPhone, contactCustEmail, contactCustMsg]));


//volume calculator
const formVol = document.forms.section2_modal_calcVolume;
const buttonVol = document.getElementById("section2_modal_calcVolume_btn");

function calcVolume(e){
    e.preventDefault();
    const widthVol = +formVol.elements.width.value;
    const lengthVol = +formVol.elements.length1.value;
    const heightVol = +formVol.elements.height.value;
    const optionVolUnit = formVol.elements.units;
    
    console.log(widthVol)
    console.log(heightVol)
    console.log(lengthVol)
    console.log(optionVolUnit.value);
    
    const volumeFinal = lengthVol * widthVol * heightVol;
    document.getElementById("section2_modal_calcVolume_result").textContent = volumeFinal;
    if (optionVolUnit.value === 'mm') {
        document.getElementById("section2_modal_calcVolume_result").textContent = volumeFinal + ' мм3';
    }
    if (optionVolUnit.value === 'cm') {
        document.getElementById("section2_modal_calcVolume_result").textContent = volumeFinal + ' см3';
    }
    if (optionVolUnit.value === 'meter') {
        document.getElementById("section2_modal_calcVolume_result").textContent = volumeFinal + ' м3';
    }
}
buttonVol.addEventListener('click', calcVolume)

//modal window
const modalWindow = document.getElementById("section2_myModal");
const openModalBtn = document.getElementById("part2_calc_volumecalc");
const spanCloseModal = document.querySelector(".section2_close");
// When the user clicks the button, open the modal 
openModalBtn.addEventListener('click', displayModal);
function displayModal() {
    formVol.reset();
    modalWindow.style.display = "block";
    document.getElementById("section2_modal_calcVolume_result").textContent = '';
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
const buttonCurrencyCalc = document.getElementById("currency_exch_calc_calc");

function getCurrency(e){
    e.preventDefault();
    const formCurrency = document.forms.currency_exch_calc;
    const currency_from_input = formCurrency.elements.currency_from_input.value;
    const currency_to_input = formCurrency.elements.currency_to_input.value;
    const currency_input_amount = formCurrency.elements.currency_input_amount.value;
    const currency_input_num = +currency_input_amount;
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