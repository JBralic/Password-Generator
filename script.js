// List of special characters for password generation:
var specialcharacters = ['/', '#','!','$','^',':','?','.','_'];
// List of numbers for password generation:
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
 // List of uppercase letters for password generation:
var uppercaseletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// List of lowercase letters for password generation:
var lowercaseletters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Promt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );
  // Conditional statement to check if password length is a number. End prompt if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }
  // Statement to check if password length is at least 8 characters long. End prompt if this evaluates as false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  // Statement to check if password length is less than 128 characters long. End prompt if this evaluates false
  if (length > 128) {
    alert('Password length must less than 30 characters');
    return null;
  }
  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );
  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Must select at least one character type');
    return null;
  }
  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };
  return passwordOptions;
}
// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}
var lookupvalues ={"o":"0","l":"1","z":"2","e":"3","f":"4","s":"5","b":"6","v":"7","i":"!"}
// Function to generate password with user input
function generatePassword() {
  // var options = getPasswordOptions();
  var nicknameinputfield = document.getElementById("nickname");
  var nickname = nicknameinputfield.value
var splitnickname = nickname.split("")
for (var i = 0; i < splitnickname.length; i++) {
if (lookupvalues[splitnickname[i]]) {
  splitnickname[i] = lookupvalues[splitnickname[i]]
}
}
nickname = splitnickname.join("")
  alert(nickname)
  // Variable to store password as it's being concatenated
  var result = [];
  // Array to store types of characters to include in password
  var possibleCharacters = [];
  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];
  // Check if an options object exists, if not exit the function
  if (!options) return null;
  // Statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  // Statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
  // Statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }
  // Statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }
  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }
  // Include one of each listed character in the created password
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  // Transform the result into a string and pass into writePassword
  return result.join('');
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Compose password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);