const login_btn = document.getElementById('login-btn');
login_btn.addEventListener('click', function(event){
    event.preventDefault();
    
    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    if(accountNumber.length === 11){
        if(pinNumber=== '1234'){
            window.location.href = "./main.html"
        }else{
            alert('Pin Does not match');
        }
    }else{
        alert('Need valid account number');
    }
})