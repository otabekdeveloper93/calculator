
let calcDisplay = document.querySelector('.calc-input');

let btnItems = Array.from(document.querySelectorAll('.btn-item'));

const btntortma = document.querySelector(".btn-tortma"),
btnContainer2 = document.querySelector('.btn-container2');


btnItems.map(btn =>{
    btn.addEventListener('click', (e) =>{

        console.log(e.target.innerText);
        switch (e.target.innerText) {
            case "AC":
                calcDisplay.innerText = '';
                break;
            case "=":
                calcDisplay.innerText = eval(calcDisplay.innerText);
                break;
            case "sin":
                calcDisplay.innerText = Math.sin(calcDisplay.innerText);
                break;
            case "cos":
                calcDisplay.innerText = Math.cos(calcDisplay.innerText);
                break;
            case "tan":
                calcDisplay.innerText = Math.tan(calcDisplay.innerText);
                break;
            case "pi":
                calcDisplay.innerText = Math.PI(eval(calcDisplay.innerText));
                break;
            case "il":
                calcDisplay.innerText = Math.sqrt(calcDisplay.innerText);
                break;
            case "xy":
                calcDisplay.innerText = Math.pow(calcDisplay.innerText, 2);
                break;
            default:
                calcDisplay.innerText += e.target.innerText;
        };

        switch (e.target.className) {
            case "bx bxs-tag-x":
                calcDisplay.innerText = calcDisplay.innerText.slice(0, -1);
                break;
            case "bx bx-x":
                calcDisplay.innerText = eval(calcDisplay.innerText);
                break;

        }
    })
})

btntortma.addEventListener('click',() =>{
    btnContainer2.classList.toggle('active-container2');
})