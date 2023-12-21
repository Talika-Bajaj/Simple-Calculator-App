let buttons = document.querySelectorAll("button");
let input = document.getElementById("input");
let inputVal = "";

for (item of buttons) {
  item.addEventListener("click", (e)=>{
    let buttonText = e.target.innerHTML;
    if (buttonText == "=") {
        try {
            inputVal = eval(inputVal);
          } catch (err) {
            inputVal = "Error";
            // inputVal = eval(inputVal);
          }
      input.value = inputVal;
    } else if (buttonText == "AC") {
      inputVal = "";
      input.value = inputVal;
    } else if(buttonText == "DEL") {
      inputVal = inputVal.substring(0, inputVal.length - 1);
      input.value = inputVal;
    } else if (e.target.id == "plusMinus") {
      inputVal = (inputVal * -1).toString();
      input.value = inputVal;
    } else {
  console.log(e.target);
      inputVal += buttonText;
      input.value = inputVal;
    }
  
  });
};