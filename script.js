// object to store details
let userDetailsDatabase = {}



function getUserDetails(){

// Username
    let userName = prompt("Enter your username")

    if (userName == null){
        return
    }

    function validateUserName(userName){
    if(userName.length < 10 && userName.length > 0){
        return true
    }else{
        return false
    }
    }
    
   while(validateUserName(userName) == false){
      userName = prompt("Username must be less than 10 and greater than 0")
   }

   userDetailsDatabase["userName"] = userName
   
// Email   
    let email = prompt("Enter your email address")
    if (email == null){
        return
    }
    
    function validateEmail(email){
        // const emailCheck = /^[a-zA-Z0-9.!#$%&'"+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi; 
        // emailCheckResult = emailCheck.test(email);
        // if (emailCheckResult == true){
    if (email.length < 25 && email.length > 0){
            return true
        }else{
            return false
        }
    }
    
    while(validateEmail(email) == false){
        email = prompt("Enter valid email")
    }

    userDetailsDatabase["email"] = email
    
// Phonenumber
    let phoneNumber = prompt("Enter your phone number")

    if (phoneNumber == null){
        return
    }
    
    function validatePhoneNumber(phoneNumber){
        if (phoneNumber.length == 11){
            return true
        }else{
            return false
        }
    }
    while(validatePhoneNumber(phoneNumber) == false){
        phoneNumber = prompt("Phone number must be 11 digits,try again")
    }

    userDetailsDatabase["phoneNumber"] = phoneNumber
    
// Password
    let password = prompt("Enter your password")

    if (password == null){
        return
    }
    
    function validatePassword(password){
          if (password.length <6){
            return false
          }else{
            return true
          }
    }
    
    while(validatePassword(password) == false){
        password = prompt("Password must not be less than 6 digits")
    }

    userDetailsDatabase["password"] = password

// Confirmpassword
    let confirmPassword = prompt("Confirm your password")

    if (confirmPassword == null){
        return
    }

    function validateConfirmPassword(confirmPassword){
        if (confirmPassword != password){
            return false
        }else{
            return true
        }
    }
    
    while(validateConfirmPassword(confirmPassword) == false){
        confirmPassword = prompt("Confirm password does not match password,try again")
    }

    userDetailsDatabase["confirmPassword"] = confirmPassword



}

function displayUserDetails(){
    alert(`Your Details\n\nUsername: ${userDetailsDatabase.userName}\nphoneNumber: ${userDetailsDatabase.phoneNumber}\n
    email: ${userDetailsDatabase.email}`)
}