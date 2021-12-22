let displayVal = document.getElementById('display');
const clear = document.getElementById('clear');
let buttons = document.querySelectorAll('.btn');
let methods = document.querySelectorAll('.btnMethod');
let equals = document.getElementById('btnEquals');
let past = document.getElementById('historyPast');

let sum;

const getValue = e => {
  let val = e.target.value;
  displayVal.value += val;
  sum = displayVal.value;
}

const getAnswer = () => {
  answer = eval(sum)
  displayVal.value = answer;
  past.innerText = `${sum} = ${answer}`
  sum = '0';
  answer = ""
}

const clearVal = () => {
  sum = 0;
  displayVal.value = ""
}

buttons.forEach(btn => {
  btn.addEventListener('click', getValue);
})

equals.addEventListener('click', getAnswer);

clear.addEventListener('click', clearVal);

