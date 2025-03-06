const cashOut = document.getElementById('cash-out-btn').addEventListener('click', function(){
    const agentNumber = document.getElementById('agent-number').value;
    const agentNumberLength = agentNumber.length;

    const cashOutAmount = document.getElementById('cash-out-amount').value;
    const convertedCashOutAmount = parseFloat(cashOutAmount);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const pinNumber = document.getElementById('cash-out-pin').value;

    if(agentNumberLength === 11 && pinNumber == '1234'){
        const sub = convertedMainBalance - convertedCashOutAmount;
        document.getElementById('main-balance').innerText = sub;
    }else{
        alert('Enter Valid Details');
    }
})