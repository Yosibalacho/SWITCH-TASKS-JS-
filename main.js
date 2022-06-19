//תרגילי SWITCH //
//1//
// let userNum = document.getElementById("user_num");

// function printTextByUserInput() {
//   let num = +userNum.value;
//   switch (num) {
//     case 3:
//       console.log("hello");
//       return;
//     case 5:
//       console.log("goodbye");
//       return;
//     case 7:
//       console.log("thank");
//       return;
//     default:
//       console.log("there is no right massege");
//   }
// }

// let myBtn = document.getElementById("btn");
// myBtn.onclick = function () {
//   printTextByUserInput();
// };
//2//
// let userName = document.getElementById("name_input");
// let nameOnScreen = document.getElementById("name_on_screen");
// function printUserName() {
//   switch (userName.value) {
//     case "jacob":
//       nameOnScreen.innerHTML = "jacob";
//       return;
//     case "nathan":
//       nameOnScreen.innerHTML = "nathan".toUpperCase();
//       return;
//     case "DALIA":
//       nameOnScreen.innerHTML = "DALIA".toLowerCase();
//       return;
//     default:
//         nameOnScreen.innerHTML="there is no right name"
//   }
// }

//3//
// function calculate() {
//   switch (mathSign.value) {
//     case "+":
//       result.innerHTML = +firstNumber.value + +secondNumber.value;
//       break;
//     case "-":
//       result.innerHTML = +firstNumber.value - +secondNumber.value;
//       break;
//     case "*":
//       result.innerHTML = +firstNumber.value * +secondNumber.value;
//       break;
//     case "/":
//       result.innerHTML = +firstNumber.value / +secondNumber.value;
//       break;
//     default:
//   }
// }
//4//
// let textValue = document.getElementById("user_text");
// let colorValue = document.getElementById("user_color");
// let sizeValue = document.getElementById("user_size");

// function printTextFromUser() {
//   myDiv.innerText = textValue.value;
//   myDiv.style.fontSize = sizeValue.value + "px";
//   myDiv.style.color = colorValue.value;
// }

//5//
// function positionElement() {
//   switch (corner.value) {
//     case "top-left":
//       circleElement.style =
//         "border-radius:50%; width:50px; height:50px; background:" +
//         colorInput.value;
//       break;
//     case "top-right":
//       circleElement.style =
//         "border-radius:50%; width:50px; height:50px; position:fixed; left:90vw;  background:" +
//         colorInput.value;
//       break;
//     case "bottom-left":
//       circleElement.style =
//         "border-radius:50%;width:50px; height:50px; margin-top:15vw;  background:" +
//         colorInput.value;
//       break;
//     case "bottom-right":
//       circleElement.style =
//         "border-radius:50%; width:50px; height:50px; margin-top:15vw; position:fixed; left:90vw;  background:" +
//         colorInput.value;
//       break;
//     default:
//       break;
//   }
// }