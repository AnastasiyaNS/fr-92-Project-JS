// Block5-Accordion
const accordionContent = document.querySelectorAll(".acc-bl5");

accordionContent.forEach((item, index) => {
    let header = item.querySelector(".head-acc");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let answer = item.querySelector(".answer-bl5");
        if(item.classList.contains("open")){
            answer.style.height = `${answer.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            
            item.querySelector("i").classList.replace("arrow-circle-closed", "arrow-circle-open");
        }else{
            answer.style.height = "0px";
            item.querySelector("i").classList.replace("arrow-circle-open", "arrow-circle-closed");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header

    let question=item.querySelector('.head-acc');
    if(item.classList.contains("open")){
        question.style.color="black";
        question.style.backgroundColor="white";
    }else{
        question.style.color="white"
        question.style.backgroundColor="#3A444E";
    }
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");
            let des = item2.querySelector(".answer-bl5");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("arrow-circle-open", "arrow-circle-closed");
        }
    })
}





// Block5-Form
const formBlcFive=document.getElementById('formBlc5');
// console.log(formBlc5)
// Валидация
const nameUserBlc5=formBlcFive.elements.nameUserBlc5;
function validateName(input){
    const regex = /^[a-zA-Zа-яА-ЯЁё\s]+$/;
    const correctValue = input.value.trim();
    if (correctValue === ''){
        showErrorMsg(input, 'Введите имя')
        return;
     }
    if (regex.test(correctValue) === false) {
        showErrorMsg(input, "Имя должно состоять из букв и пробелов");
        return;
    } 
    closeErrorMsg(input);
    return true;
}
const phoneUserBlc5=formBlcFive.elements.phoneUserBlc5;
function validatePhone(input){
    const correctValue = input.value.trim();
    const regex = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/;
    if (correctValue === ''){
        showErrorMsg(input, "Введите номер телефона")
        return;
    }
    if (regex.test(correctValue) === false){
        showErrorMsg(input, "Введите корректный номер телефона");
        return;
    }
    closeErrorMsg(input);
    return true;
}

function showErrorMsg(input, message){
    const parentElement = input.parentElement;
    const errorMsgPar = parentElement.querySelector(".block5_form_errormsg");
    errorMsgPar.textContent = message;
    errorMsgPar.classList.remove("block5_form_errormsg_none");
}

function closeErrorMsg(input){
    const parentElement = input.parentElement;
    const errorMsgPar = parentElement.querySelector(".block5_form_errormsg");
    errorMsgPar.textContent = '';
    errorMsgPar.classList.add("block5_form_errormsg_none");
    return true;
}

const priceCalcConf = document.getElementById("section2_formcalc_submitted");
function formSubmittedMsg(input){
    
    priceCalcConf.classList.remove("section2_formcalc_submitted_none");
    priceCalcConf.classList.add("section2_formcalc_submitted");
    formBlcFive.classList.add("part2_formcalc_none");
}



nameUserBlc5.addEventListener('input', () => validateName(nameUserBlc5));
phoneUserBlc5.addEventListener('input', () => validatePhone(phoneUserBlc5));




function retrieveFormValue(event){
event.preventDefault();

const fields=document.querySelectorAll('.input-blc5, .inputmessage-blc5');
const values={};

fields.forEach(field => {
    const {name, value}=field;
    values[name]=value;
});

console.log(values)
formBlcFive.reset();
}

// formBlcFive.addEventListener('submit', retrieveFormValue);

const btnCalcCargo = document.getElementById("button-blc5");
btnCalcCargo.addEventListener('click', (input) => {
    formBlcFive.addEventListener("submit", (e) => {
             e.preventDefault();
             validateName(nameUserBlc5);
                validatePhone(phoneUserBlc5);
               
             if (validateName(nameUserBlc5) && validatePhone(phoneUserBlc5)) {
                formSubmittedMsg(input)       
            }
        })
    })