// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  //Password Char Possibilities
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ".", ",", "<", ">", "/", "?", "{", "}", "[", "]", "|"];

  var passSelect = [];
  var passLength = prompt("How long do you need your password to be? (8-128)");

  //Password Length Input
  if (isNaN(passLength) || (passLength < 8) || (passLength > 128)) {
    alert("Please enter a value between 8 and 128.");

  } else {

    //Char Prompts
    var confirmNumber = confirm("Would you like your password to contain numbers?");
    var confirmLower = confirm("Would you like your password to contain lowercase characters?");
    var confirmUpper = confirm("Would you like your password to contain uppercase characters?");
    var confirmSpecial = confirm("Would you like your password to contain special characters?");

    //Used concat to display all true arrays
    if (confirmNumber) {
      var passSelect = passSelect.concat(number)
    }
    if (confirmLower) {
      var passSelect = passSelect.concat(lower)
    }
    if (confirmUpper) {
      var passSelect = passSelect.concat(upper)
    }
    if (confirmSpecial) {
      var passSelect = passSelect.concat(special)
    }

    //used for loop to determine input length
    //Used concat to combine truths into a single array
    var ssPassword = [];
    for (var i = 0; i < passLength; i++) {
      var x = Math.floor(Math.random() * passSelect.length);
      var ssPassword = ssPassword.concat(passSelect[x]);
    }
  }

  //Used join to join array into single string for password result
  return (ssPassword = ssPassword.join(''));
}

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
