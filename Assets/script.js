// Assignment Code
var generateBtn = document.querySelector("#generate");

let lowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "+", "-", "_", "=", "~"]
let choices = [];


function generatePassword(){
  let password = "";

  if(confirm("are lowercase letters allowed?")){
    choices = [...choices, ...lowerCaseAlphabet];
  }

  if(confirm("are uppercase letters allowed?")){
    choices = [...choices, ...upperCaseAlphabet];
  }

  if(confirm("are numbers allowed?")){
    choices = [...choices, ...numbers];
  }

  if(confirm("are special characters allowed?")){
    choices = [...choices, ...symbols];
  }
 
  if(choices.length === 0){
    return "no characters selected. Please try again.";
  }

  let passwordLength = prompt("How long do you want the password");
  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("Length must be between 8 and 128 characters. Please reenter the password length");
  }

  for (let i = 0; i < passwordLength; i++){
      password += choices[Math.floor(Math.random()*choices.length)];
  }
  choices = [];
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
