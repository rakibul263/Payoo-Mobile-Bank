const cashOut = document.getElementById('cash-out-btn').addEventListener('click', function(){
    const agentNumber = document.getElementById('agent-number').value;
    const agentNumberLength = agentNumber.length;

    const cashOutAmount = document.getElementById('cash-out-amount').value;
    const convertedCashOutAmount = parseFloat(cashOutAmount);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const pinNumber = document.getElementById('cash-out-pin').value;

    const accountNumber = document.getElementById('account-number').value;

    const container = document.getElementById('transaction-container');


    if(agentNumberLength === 11 && pinNumber == '1234'){
        const sub = convertedMainBalance - convertedCashOutAmount;
        document.getElementById('main-balance').innerText = sub;

        const p = document.createElement('p');
        p.innerText = `
        Cash Out ${cashOutAmount} from ${accountNumber} account.
        `
        // console.log(p);
        container.appendChild(p);
    }else{
        alert('Enter Valid Details');
    }
})