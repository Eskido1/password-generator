
 const generatePassword =()=>{
    let inputLength= document.querySelector('#input').value;
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"
    let password = '';
    // let randomNum = Math.floor(Math.random()charset.length)
    for (let i = 0; i < inputLength; i++) {
        let randomNum = Math.floor(Math.random() * charset.length)
    password = password + charset.charAt(randomNum)

    }
    document.querySelector('#display').value=password;
     
}
let button =document.querySelector("button")
button.addEventListener("click", generatePassword)