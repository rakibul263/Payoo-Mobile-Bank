document.getElementById('transaction-history-box').addEventListener('click', function(){
    handleToggle('add-money-section', "none");
    handleToggle('cash-out-section', "none");
    handleToggle('transaction-history-section', "block");
});

function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}