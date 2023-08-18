document.getElementById("with").addEventListener("click", function(){

    const newDepositAmount = getInputFieldValueById('withdraw-amount');
    const previousDepositTotal = getTextElementValueById('withdraw');
    
    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit total value
    setTextElementValueById('withdraw', newDepositTotal);

    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance')
    const newBalanceTotal = previousBalanceTotal - newDepositAmount;
    setTextElementValueById('balance', newBalanceTotal);
})