function toggleForms(form) {
const loginForm = document.getElementById('registration-form');
const signupForm = document.getElementById('signup-form');
if (form === 'login') {
signupForm.style.display = 'none';
loginForm.style.display = 'block';
} 
else {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
}
}
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();  

 
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let valid = true;

    if (username.length < 3) {
        valid = false;
        document.getElementById('username-error').innerText = 'Username must be at least 3 characters.';
        document.getElementById('username-error').style.display = 'block';
        
    }
   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        valid = false;
        document.getElementById('email-error').innerText = 'Please enter a valid email.';
        document.getElementById('email-error').style.display = 'block';
    }


    if (password.length < 8) {
        valid = false;
        document.getElementById('password-error').innerText = 'Password must be at least 8 characters.';
        document.getElementById('password-error').style.display = 'block';
    }
     if (password == password.toUpperCase()) {
        document.getElementById('password-error').innerText = 'Password must contain lowercase letters!';
        document.getElementById('password-error').style.display = 'block';
       
     
    }
     if (password == password.toLowerCase()) {
        document.getElementById('password-error').innerText = 'Password must contain uppercase letters!';
        document.getElementById('password-error').style.display = 'block';
    
      
    } 
    else {
        const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
        let hasDigit = false;
        for (let i = 0; i < password.length; i++) {
            if (!isNaN(password[i])) {
                hasDigit = true;
                break;
            }
        }
        if (!hasDigit) {
            document.getElementById('password-error').innerText = 'Password must contain digits!';
            document.getElementById('password-error').style.display = 'block';
        } 
        else if (!specialCharacterRegex.test(password)) {
            document.getElementById('password-error').innerText = 'Password must contain special characters!';
            document.getElementById('password-error').style.display = 'block';
        } 
        else {
            document.getElementById('password-error').innerText = 'Password is strong!';
            document.getElementById('password-error').style.display = 'block';
            document.getElementById('password-error').style.color= 'green';
        }
    }
    if (password !== confirmPassword) {
        valid = false;
        document.getElementById('confirm-password-error').innerText = 'Passwords do not match.';
        document.getElementById('confirm-password-error').style.display = 'block';
    }


    if (valid) {
        alert('Registration successfully!');
        document.write("<h1>User Information:</h1>")
        document.write("<h3>User Name:</h3>", username );
        document.write("<h3>Email:</h3>",  email );
        document.write("<h3>Password:</h3>", password );
        document.write("<h3>ConfirmPassword:</h3>", confirmPassword );
        document.body.style.backgroundColor=" #e27272";
        document.body.style.fontSize="20px"
        document.body.style.textAlign="center"
    }
})

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    alert('Sign up Suceessfully!');
    document.write("<h1>User Information:</h1>")
    document.write("<h3>User Name:</h3>", username );
    document.write("<h3>Email:</h3>",  email );
    document.write("<h3>Password:</h3>", password );
    document.body.style.backgroundColor=" #e27272";
    document.body.style.fontSize="20px"
    document.body.style.textAlign="center"
});