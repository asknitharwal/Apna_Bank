
let balance = 0;

let span = document.getElementById('span');
let input = document.getElementById('amount');
let creditBtn = document.getElementById('creditBtn');
let debitBtn = document.getElementById('debitBtn');
let customAlert = document.getElementById('customAlert');
let alertMessage = document.getElementById('alertMessage');

function showAlert(message) {
    alertMessage.innerText = message;
    customAlert.style.display = 'block';
}

function closeAlert() {
    customAlert.style.display = 'none';
}

function creditAccount() {
    let amount = parseFloat(input.value);
    if (amount > 0) {
        balance += amount;
        showAlert(`Credited: ₹${amount}. New balance: ₹${balance}.`);
    } else {
        showAlert("Invalid credit amount. Please enter a positive number.");
    }
    span.innerText = balance;
    input.value = '';
}

function debitAccount() {
    let amount = parseFloat(input.value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        showAlert(`Debited: ₹${amount}. New balance: ₹${balance}.`);
    } else {
        showAlert("Insufficient balance. Debit amount exceeds current balance.");
    }
    span.innerText = balance;
    input.value = '';
}

creditBtn.addEventListener('click', creditAccount);
debitBtn.addEventListener('click', debitAccount);
