document.getElementById("depo").addEventListener("click", function(){

    const newDepositAmount = getInputFieldValueById('deposit-amount');
    const previousDepositTotal = getTextElementValueById('deposit');
    
    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit total value
    setTextElementValueById('deposit', newDepositTotal);

    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance', newBalanceTotal);
})