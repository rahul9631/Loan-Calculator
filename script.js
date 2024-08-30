function calculateLoan() {
    const principal = parseFloat(document.getElementById('principal').value);
    const annualInterestRate = parseFloat(document.getElementById('interest').value);
    const years = parseFloat(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(annualInterestRate) || isNaN(years)) {
        alert('Please fill in all fields with valid numbers.');
        return;
    }

    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = years * 12;

    const monthlyPayment = (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    if (isFinite(monthlyPayment)) {
        document.getElementById('payment').innerText = `₹${monthlyPayment.toFixed(2)}`;
    } else {
        document.getElementById('payment').innerText = 'Invalid input';
    }
}
