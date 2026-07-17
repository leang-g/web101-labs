// --- JavaScript Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('numberInput');
    const checkBtn = document.getElementById('checkBtn');
    const resultArea = document.getElementById('result');

    function handleCheck() {
        const inputValue = numberInput.value.trim();

        // Reset result area classes
        resultArea.classList.remove('success', 'error');

        // 1. Validate for empty input
        if (inputValue === '') {
            resultArea.textContent = 'Please enter a number.';
            resultArea.classList.add('error');
            return;
        }

        // 2. Validate for non-numeric input
        if (!/^[0-9]+$/.test(inputValue)) {
            resultArea.textContent = 'Invalid input. Please enter digits only.';
            resultArea.classList.add('error');
            return;
        }

        // 3. Perform palindrome check
        const reversedValue = inputValue.split('').reverse().join('');
        if (inputValue === reversedValue) {
            resultArea.textContent = 'Number is a palindrome number';
            resultArea.classList.add('success');
        } else {
            resultArea.textContent = 'Number is not a palindrome number';
            resultArea.classList.add('error');
        }
    }

    checkBtn.addEventListener('click', handleCheck);

    // Bonus: Allow 'Enter' key to trigger the check
    numberInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleCheck();
        }
    });
});