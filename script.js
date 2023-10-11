// Assignment code here//
// The Password generator will provide a password with 8-128  characters based on criteria the user specifies.


document.querySelector("#generate").addEventListener("click", writePassword);







//presentaion of variables for the prompt //
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var lowerCaseAlphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseAlphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "$", "@", "#", "$", "%", "^", "=", "+", "-",]






// the arrays //
var confirmPasswordLength = "";
var confirmSpecialch;
var confirmUpperCase;
var confirmLowerCase;
var confirmSpecialCharacter;




// the prompt for user choice//
function generatePassword() {
  var confirmLength = (prompt("pick a length of at least 8 characters and no more than 128 characters"));

  // Loop if the user input is differrent from defined  the function's arguments//
  while (confirmLength <= 8 || confirmLength >= 128) {
    alert("Passwords length has to only 8-128 characters retry");
    var confirmLength = (prompt("How many characters should your password to have?"));
  }

  //Repeat back how many characters the user will have 
  alert('THIS PASSWORD WILL HAVE ${confirmLength} CHARACTERS');

  //durability of the password//
  var confirmSpecialCharacter = confirm("CHOOSE OK  if you would like to add special characters");
  var confirmNumericCharacter = confirm("CHOOSE OK  if you would like to include numeric characters");
  var confirmLowerCase = confirm("CHOOOSE OK  if you would like to include lowercase characters");
  var confirmUpperCase = confirm("CHOOSE OK if you would like to include uppercase characters");



  // if outside of defined parameters// 
  while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  }

  // this the designation of parameters to the password//
  var passwordCharacters = []

  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number)
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCaseAlphabets)
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCaseAlphabets)
  }

  console.log(passwordCharacters)


  var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

// write password to the password input//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




