document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amount =  document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);

    //verify pin
    const pin = document.getElementById('pin-num').value;
    const convertedPin = parseInt(pin);
    
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);


    if(convertedPin === 1234){
        const sum = convertedAmount + convertedMainBalance;
        document.getElementById('main-balance').innerText = sum;
        
    }else{
        alert('Enter Your Correct Pin Number');
    }
})