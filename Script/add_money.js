document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amount =  document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);

    //verify pin
    const pin = document.getElementById('pin-num').value;
    const convertedPin = parseInt(pin);

    const accountNumber = document.getElementById('account-number').value;
    
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);


    const container = document.getElementById('transaction-container');
    
    if(convertedPin === 1234){
        const sum = convertedAmount + convertedMainBalance;
        document.getElementById('main-balance').innerText = sum;

        const p = document.createElement('p');
        p.innerText = `
        added ${amount} from ${accountNumber} account.
        `
        // console.log(p);
        container.appendChild(p);
        
    }else{
        alert('Enter Your Correct Pin Number');
    }
})

