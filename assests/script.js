// Assignment Code
let passwordLength = 8;
let symbol_el = ['!', '"', '#', '$', '%', '&', '(', ')', '=', '+', '<', '>', ';', ':', ',', '/', '@', '*', '[', ']', '{', '}'];
let lowercase_el = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let uppercase_el = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let number_el = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const generateBtn = document.querySelector("#generate");
const textareaEl = document.getElementById('password');

// Write password to the password input
function writePassword() {
  // Ask user to enter password length
  const passwordLength = Number(prompt("Enter the length of password (should be number between 8 and 128)"));

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    alert('Try again, Plesae enter number (should be between 8 and 128)')
    return writePassword();
  }


  // The following the my attempt to use prompts con

  // Ask user to confirm if want symbols,lowercase,uppercase and number
  const symbol = confirm("Click ok to include symbols otherwise cancel");
  
  const lowercase = confirm("Click ok to include lowercase letter otherwise cancel");

  const wantUppercase = confirm("Click ok to include uppercase letter otherwise cancel");

  const wantNumber = confirm("Click ok to include numbers otherwise cancel");

  if(!lowercase && !symbol && !wantUppercase && !wantNumber){
    alert('Please select at least one character type')
    return writePassword();
  }

  // Generate newPassword before we create the password
  let newPassword = "";

  if(symbol){
    newPassword = newPassword + symbol_el;
  }

  if (lowercase) {
    newPassword = newPassword + lowercase_el;
  }

  if (wantUppercase) {
    newPassword = newPassword + uppercase_el;
  }

  if (wantNumber) {
    newPassword = newPassword + number_el;
  }

  // Generate password based on character type selected

  const password = generatePassword(passwordLength, newPassword);

  // Insert password to text area 
  textareaEl.value = password;
}


function generatePassword(length, newPassword){

  let password = "";

  // Get random character for 'passwordLength' times
  for (let count = 0; count < length; count++) {
    // Get a random character based on newPassword
    const randomIndex = Math.floor(Math.random() * newPassword.length)

    password = password + newPassword[randomIndex];

  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
