let firstText  = document.getElementById("first-text");
let secondText = document.getElementById("second-text");
let thirdText  = document.getElementById("third-text");
let fourthText = document.getElementById("four-text");
let fifthText  = document.getElementById("fifth-text");

let displayArea = document.getElementById("display");
let textBox = document.getElementById("text-box");
let totalMistakes = document.getElementById('mistake')

let messageBox = document.getElementById('message');

let text = "";

firstText.addEventListener("click", function () {
  text =
    "Your peace is more important than understanding why something happened the wayit did";
  displayArea.innerHTML = text;
});

secondText.addEventListener("click", function () {
  text =
    "Finding happiness is the real key to success; if you enjoy what you    do, success will follow.";
  displayArea.innerHTML = text;
});

thirdText.addEventListener("click", function () {
  text=
   'Success is not found before effort in the dictionary or in life.'
  displayArea.innerHTML = text;
});

fourthText.addEventListener("click", function () {
  text='You have to dream before your dreams can come true'
  displayArea.innerHTML = text;
});

fifthText.addEventListener("click", function () {
  text= 'It is never too late to be what you might have been'
  displayArea.innerHTML = text;
});

let mistakesCount=0;

textBox.addEventListener("input", (e) => {
  let textValue = e.target.value;

  for (let i = 0; i < textValue.length; i++) {
    if (i < text.length) 
    {
      if (textValue[i] === text[i]) {
        textBox.style.border = "5px solid blue";
      } else {
        mistakesCount++;
        textBox.style.border = "5px solid red";
      }
    } 

    else {
      textBox.style.border = "5px solid yellow";
      textBox.disabled = true; 
      messageBox.innerHTML = "Congraculation"
    }
  }  
  console.log(`Mistakes: ${mistakesCount}`);
  totalMistakes.innerHTML =`${mistakesCount}`;
});  
