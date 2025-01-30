// Block5
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
        question.style.backgroundColor="#363A4d";
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

// Forma

const formBlcFive=document.getElementById('formBlc5');
// console.log(formBlc5)

function retrieveFormValue(event){
  event.preventDefault();
  
const fields=document.querySelectorAll('input, textarea');
const values={};
 
  fields.forEach(field => {
    const {name, value}=field;
    values[name]=value;
  });
  
  console.log(values)
  formBlcFive.reset();
  }

formBlcFive.addEventListener('submit', retrieveFormValue);



