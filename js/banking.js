
// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get amount deposit
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)
    const newDepositAmount = parseFloat(newDepositText)
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update acount balance
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousTotalBalance = parseFloat(balanceTotalText);
    const newBalanceTotal = previousTotalBalance + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;



    // clear deposit amount
    depositInput.value = '';



});


// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawTotalText = withdrawInput.value;
    const newWithdawAmount = parseFloat(withdrawTotalText);

    // set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previouseWithdrawText = withdrawTotal.innerText;
    const previouseWithdrawTotal = parseFloat(previouseWithdrawText);

    const newWithdrawTotal = previouseWithdrawTotal + newWithdawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newTotalBalance = previousBalanceTotal - newWithdrawTotal;

    balanceTotal.innerText = newTotalBalance;

    // clear withdraw amount
    withdrawInput.value = '';

})