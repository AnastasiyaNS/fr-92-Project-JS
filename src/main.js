// Block5

let acc = document.getElementsByClassName("question-blc5");
let i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
this.classList.toggle("active");
let panel = this.nextElementSibling;
if (panel.style.maxHeight){
    panel.style.maxHeight = null;
} else {
    panel.style.maxHeight = panel.scrollHeight + "px";
} 
});
}