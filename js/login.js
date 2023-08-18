function login(){
    const email = getInputValue("email");
    const password = getInputValue("password");
    
    if(email === "admin@gmail.com" && password === "admin"){
        window.location.href = "bank.html";
    }else{
        alert("Please enter valid email address and password");
    }
}